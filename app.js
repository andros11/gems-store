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
    store.products = []; // this is so the page doesn't give an error when loading
    $http.get("http://localhost:9000/gems").success(function (data) {
      store.products = data;
    });

    store.getGemsByName = function(search) {

      var temp = [];
      var enter = 0;
      var enter2 = 1;

      if (isNaN(parseFloat(search))) {
        for (i = 0; i < store.products.length; i++) {
          if (store.products[i].name.indexOf(search) > -1) {
            temp.push(store.products[i]);
            enter = 1;
          }
        }

        if (enter === 0 && enter2 === 1) {
          for (i = 0; i < store.products.length; i++) {
            for (j = 0; j < store.products[i].reviews.length; j++) {
              if (store.products[i].reviews[j].text.indexOf(search) > -1) {
                temp.push(store.products[i]);
              }
            }
          }
        }
      }

      else {
        var conversion = parseFloat(search);
        for (i = 0; i < store.products.length; i++) {
          if (store.products[i].price === conversion) {
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
