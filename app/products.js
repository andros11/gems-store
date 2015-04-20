var app = angular.module('store-directives', []);

app.directive("descriptions", function() {
  return {
    restrict: "E",
    templateUrl: "descriptions.html"
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

app.directive("productAdd", function() {
  return {
    restrict: "E",

    templateUrl: "product-add.html",
    controller: function() {
      this.add = false;

      this.isVisible = function() {
        return this.add;
      };

      this.toggleAdd = function() {
        this.add = !this.add;
      };
    },
    controllerAs: "create"
  };
});

app.directive("productEdit", function() {
  return {
    restrict: "E",

    templateUrl: "product-edit.html",
    controller: function() {
      this.edit = false;

      this.isVisible = function() {
        return this.edit;
      };

      this.toggleEdit = function() {
        this.edit = !this.edit;
      };
    },
    controllerAs: "edit"
  };
});
