(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('gap', Gap);

  function Gap(Item, GetJson) {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'app/main/directive/html/gap.directive.html',
      link: function($scope, element, attrs) {
        //  console.log($scope);
        //  console.log(attrs.id);
        //  console.log(element);

        //  console.log(attrs.id);
          $scope.answersId = [];
          $scope.answersAnswer = [];
          var Model = new Item();
          $scope.Model = Model;
          var promiseAnswers = GetJson.getData();

          promiseAnswers.then(function(data) {
            $scope.answer = data;
            $scope.answer.forEach(function(answer) {
            //  console.log(answer.id);
              $scope.answersId.push(answer.id);
              $scope.answersAnswer.push(answer.answers);
            });
            //  console.log($scope.answersId);
            //  console.log($scope.answersAnswer);

            if ($scope.answersId.indexOf(attrs.id) != -1) {
              $scope.Model.setId($scope.answersId[attrs.id-1]);
              $scope.Model.setAnswers($scope.answersAnswer[attrs.id-1]);

            }
          });
          $scope.getData = function() {
            console.log($scope.Model);
          }
      }
    };
  };
})();
