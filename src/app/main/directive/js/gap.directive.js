(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('gap', Gap);

  function Gap(Item) {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'app/main/directive/html/gap.directive.html',
      link: function($scope, element, attrs) {
      //  console.log($scope);
      //  console.log(attrs.id);
        console.log(element);
        var Model = new Item();
        $scope.Model = Model;
        $scope.getData = function() {
          console.log(attrs.id);
        }
      }
    };
  };
})();
