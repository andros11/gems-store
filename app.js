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
