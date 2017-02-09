(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, GetJson, dataFromDirective, ExerciseModel) {
    $scope.checkAnswers = function() {
      console.log(ExerciseModel.evaluateItems());
    }
  }

})();
