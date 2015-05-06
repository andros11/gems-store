var app = angular.module('store-directives', []);

app.directive("descriptions", function() {
  return {
    restrict: "E",
    templateUrl: "descriptions.html"
  }
});

app.directive("reviews", function() {
  return {
    restrict: "E",
    templateUrl: "reviews.html"
  }
});

app.directive("specs", function() {
  return {
    restrict: "E",
    templateUrl: "specs.html"
  }
});

app.directive("productTabs", function() {
  return {
    restrict: "E",
    templateUrl: "product-tabs.html",

    controller: function() {
      this.tab = 1;

      this.isSet = function(checkTab) {
        return this.tab === checkTab;
      };

      this.setTab = function(activeTab) {
        this.tab = activeTab;
      };
    },
    controllerAs: "tab"
  };
});

app.directive("productAdd", ['$http', function($http) {
  return {
    restrict: "E",
    templateUrl: "product-add.html",

    controller: function() {
      this.hide = true;
      this.newProduct = {};

      this.toggleHide = function() {
        this.hide = !this.hide;
        // Reset on cancel
        this.newProduct = {};
      };

      this.addProduct = function() {
        var add = this;
        $http.post("http://localhost:9000/gem", add.newProduct).success(function name(data) {
          location.reload();
        });
      };
    },
    controllerAs: "add"
  };
}]);

app.directive("productEdit", ['$http', function($http) {
  return {
    restrict: "E",
    templateUrl: "product-edit.html",

    controller: function() {
      this.hide = true;
      this.newProduct = {};

      this.toggleHide = function() {
        this.hide = !this.hide;
        // Reset on cancel
        this.newProduct = {};
      };

      this.updateProduct = function(productId) {
        this.newProduct.id = productId;
        var edit = this;
        $http.put("http://localhost:9000/gem/"+productId, edit.newProduct).success(function name(data) {
          alert("success");
          location.reload();
        });
      };
    },
    controllerAs: "edit"
  };
}]);

app.directive("productDelete", ['$http', '$window', function($http, $window) {
  return {
    restrict: "E",
    templateUrl: "product-delete.html",

    controller: function() {

      this.deleteProduct = function(productId) {
        var deleteGem = $window.confirm('Are you absolutely sure you want to delete this gem?');

        if (deleteGem) {
          $http.delete("http://localhost:9000/gem/"+productId).success(function name(data) {
            alert("success");
            location.reload();
          });
        }
      };
    },
    controllerAs: "delete"
  };
}]);
