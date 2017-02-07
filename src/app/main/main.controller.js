(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, CartModel, GetJson) {
    var promiseAnswers = GetJson.getData();

  	promiseAnswers.then(function(data) {
  		$scope.answer = data;
      console.log(data);
  	});
  }

})();
