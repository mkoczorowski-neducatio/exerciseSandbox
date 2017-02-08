(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, GetJson, dataFromDirective, listOfObjects) {
    $scope.checkAnswers = function() {
      console.log(listOfObjects.getList());
    }
    //var Model = new Item();
    //console.log(Model);
    //console.log(JSON.stringify(Model, null, 2));
    //Model.setAnswers($scope.value);
  }

})();
