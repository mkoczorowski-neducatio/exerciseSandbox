(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('gap', Gap);

  function Gap(Item, GetJson, dataFromDirective, listOfObjects) {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'app/main/directive/html/gap.directive.html',
      link: function($scope, element, attrs) {
        $scope.answersId = [];
        $scope.answersAnswer = [];
        $scope.inputValue = "";
        $scope.listOfObjects = [];
        var promiseAnswers = GetJson.getData();
        var Model = new Item();
        $scope.Model = Model;

        listOfObjects.addPeople($scope.Model);
        promiseAnswers.then(function(data) {
          $scope.answer = data;

          $scope.answer.forEach(function(answer) {
            $scope.answersId.push(answer.id);
            $scope.answersAnswer.push(answer.answers);
          });

          if ($scope.answersId.indexOf(attrs.id) !== -1) {
            $scope.Model.setId($scope.answersId[attrs.id-1]);
            $scope.Model.setAnswers($scope.answersAnswer[attrs.id-1]);
          }
        });
        $scope.getDate = function() {
          $scope.Model.setInputValue(dataFromDirective.setValue($scope.inputValue));
        }
      }
    };
  };
})();
