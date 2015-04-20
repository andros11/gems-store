(function() {
  'use strict';
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

    store.products = []; //this is so the page doesn't give an error when loading
    $http.get("http://gems-hq.herokuapp.com/gemList").success(function (data) {
      store.products = data;
    });

    store.addGem = function(gem) {
      // when the function is successful, refresh the list
      $http.post("http://gems-hq.herokuapp.com/gem", gem).success(function name(data) {
        store.products.push(data);
        //store.products = data;
      })
    }

    store.deleteGem = function(gemId) {
      // when the function is successful, refresh the list
      $http.delete("http://gems-hq.herokuapp.com/gem/"+gemId);
      $http.get("http://gems-hq.herokuapp.com/gemList").success(function (data) {
        store.products = data;
      });
    }

    store.updateGem = function(gemId, gem) {
      alert(gemId);
      alert(gem);
      $http.put("http://gems-hq.herokuapp.com/gem/"+gemId, gem).success(function name(data) {
        alert("success");
      });

      $http.get("http://gems-hq.herokuapp.com/gemList").success(function (data) {
        store.products = data;
      });
    }

    store.gemList = function() {
      $http.get("http://gems-hq.herokuapp.com/gemList").success(function (data) {
        store.products = data;
        console.log(data);
      });
    }
  }]);

})();
