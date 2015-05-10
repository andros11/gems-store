(function() {
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.setCurrent = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = imageNumber || 0;
    };
  });

  app.controller('StoreController', ['$http', function($http) {
    var store = this;
    store.products = [];
    store.search = '';
    store.searchType = 'Name';

    // Fetch gems
    $http.get("http://localhost:9000/gems").success(function (data) {
      store.products = data;
    });

    store.refreshGems = function() {
      $http.get("http://localhost:9000/gems").success(function (data) {
        store.products = data;
      });
      store.search = '';
    };

    store.searchGems = function() {
      var temp = [];
      var lcSearch = store.search.toLowerCase();

      if (store.searchType === 'Name' && isNaN(parseFloat(store.search))) {
        for (i = 0; i < store.products.length; i++) {
          if (store.products[i].name.toLowerCase().indexOf(lcSearch) > -1) {
            temp.push(store.products[i]);
          }
        }
      }

      else if (store.searchType === 'Review' && isNaN(parseFloat(store.search))) {
        for (i = 0; i < store.products.length; i++) {
          for (j = 0; j < store.products[i].reviews.length; j++) {
            if (store.products[i].reviews[j].title.toLowerCase().indexOf(lcSearch) > -1
                || store.products[i].reviews[j].text.toLowerCase().indexOf(lcSearch) > -1
                || store.products[i].reviews[j].author.toLowerCase().indexOf(lcSearch) > -1) {
              temp.push(store.products[i]);
            }
          }
        }
      }

      else if (store.searchType === 'Price') {
        var conversion = parseFloat(store.search);
        for (i = 0; i < store.products.length; i++) {
          if (store.products[i].price <= conversion) {
            temp.push(store.products[i]);
          }
        }
      }

      store.products = temp;
    };

  }]);

  app.controller("ReviewController", ['$http', function($http) {
    this.review = {};

    this.addReview = function(product) {
      this.review.id = product.reviews.length + 1;
      this.review.date = Date.now();
      product.reviews.push(this.review);
      this.review = {};
      $http.put("http://localhost:9000/gem/"+product.id, product).success(function name(data) {
        alert("success");
      });
    };

  }]);

})();
