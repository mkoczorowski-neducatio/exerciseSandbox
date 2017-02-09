(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, GetJson, ExerciseModel) {
    $scope.checkAnswers = function() {
      console.log(ExerciseModel.evaluateItems());
    }

    $scope.reset = function() {
      console.log(ExerciseModel.resetValues());
    }
  }

})();
