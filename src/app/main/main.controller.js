(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, CartModel, GetJson, ItemModel) {
    var promiseAnswers = GetJson.getData();

  	promiseAnswers.then(function(data) {
  		$scope.answer = data;
      console.log($scope.answer);

      $scope.answer.forEach(function(answer) {
      //console.log(answer.id);
      });
    });
    var Model = new Item();
    console.log(Model);
  }

})();
