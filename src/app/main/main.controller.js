(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, GetJson, ExerciseModel) {
    $scope.showProgress = 0;
    $scope.checkAnswers = function() {
      console.log(ExerciseModel.evaluateItems());
    };

    $scope.reset = function() {
      console.log(ExerciseModel.resetValues());
    };

    $scope.getScore = function() {
      console.log(ExerciseModel.getScore());
      console.log(ExerciseModel.getSum());
      $scope.showProgress = ExerciseModel.getSum();
      if ($scope.showProgress === 5) {
        console.log("kuniec");
      }
    }
  }

})();
