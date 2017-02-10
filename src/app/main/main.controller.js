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
      ExerciseModel.evaluateItems();
    };

    $scope.reset = function() {
      $scope.showProgress = 0;
      $scope.displayButtons();
      ExerciseModel.resetValues();
    };

    $scope.getScore = function() {
      var sum = ExerciseModel.getScore();
      //ExerciseModel.getSum();
      console.log();
      $scope.showProgress = sum;
      if ($scope.showProgress === 5) {
        $scope.checkButtonVisibility = true;
        $scope.getScoreButtonVisibility = true;
      }
    }
  }

})();
