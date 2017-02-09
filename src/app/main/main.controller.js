(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, GetJson, dataFromDirective, listOfObjects, ExerciseModel) {
    $scope.checkAnswers = function() {
      console.log(ExerciseModel.evaluateItems());
    }
    //var Model = new Item();
    //console.log(Model);
    //console.log(JSON.stringify(Model, null, 2));
    //Model.setAnswers($scope.value);
  }

})();
