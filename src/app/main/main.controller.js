(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, GetJson) {
    var promiseAnswers = GetJson.getData();
    $scope.value = "";

  	promiseAnswers.then(function(data) {
  		$scope.answer = data;
      console.log($scope.answer);

      $scope.answer.forEach(function(answer) {
      console.log(answer.answers);
      });
    });

    var Model = new Item();
  //  console.log(JSON.stringify(Model, null, 2));
    Model.setAnswers($scope.value);
  }

})();
