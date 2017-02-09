(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, GetJson, ExerciseModel) {
    $scope.showProgress = 0;

    $scope.displayButtons = function() {
      $scope.checkButtonVisibility = false;
      $scope.getScoreButtonVisibility = false;
    }

    $scope.checkAnswers = function() {
      console.log(ExerciseModel.evaluateItems());
    };

    $scope.reset = function() {
      $scope.showProgress = 0;
      $scope.displayButtons();
      console.log(ExerciseModel.resetValues());
    };

    $scope.getScore = function() {
      console.log(ExerciseModel.getScore());
      console.log(ExerciseModel.getSum());
      $scope.showProgress = ExerciseModel.getSum();
      if ($scope.showProgress === 5) {
        $scope.checkButtonVisibility = true;
        $scope.getScoreButtonVisibility = true;
      }
    }
  }

})();
