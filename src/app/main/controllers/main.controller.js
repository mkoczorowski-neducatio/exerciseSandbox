(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $localStorage, Item, GetJson, ExerciseModel, $compile) {
    $scope.$storage = $localStorage.$default({
      arr: [],
      ob: {},
      addedClassNames: []
    });

    $scope.classNameValue = "";

    $scope.addClassName = function() {
      $localStorage.addedClassNames.push($scope.classNameValue);
      console.log($localStorage.addedClassNames);
    }
    ExerciseModel.setListOfClasses($localStorage.addedClassNames);

    $scope.rmClassList = function() {
      delete $localStorage.addedClassNames;
      $localStorage.addedClassNames = [];
      console.log($localStorage.addedClassNames);
    }

    $scope.displayClassList = function() {
      console.log($localStorage.addedClassNames);
    }

    $scope.rmLocalStorageData = function() {
      delete $localStorage.arr;
      $localStorage.arr = [];
      delete $localStorage.ob;
      $localStorage.ob = {};
      console.log($localStorage.arr);
    }

    $scope.showProgress = 0;

    $scope.displayButtons = function() {
      $scope.checkButtonVisibility = false;
      $scope.getScoreButtonVisibility = false;
    };

    console.log($localStorage.ob);

    $scope.checkAnswers = function() {
      ExerciseModel.evaluateItems();
      $localStorage.arr.forEach(function(element) {
        if (element) {
          $localStorage.arr.splice(0,3);
        }
      });

      ExerciseModel.getList().forEach(function(element) {
        $localStorage.ob[element.id] = element.inputValue;
      });
      console.log($localStorage.ob);
    };

    for (var key in $localStorage.ob) {
      ExerciseModel.setLocalStorageData(key, $localStorage.ob[key]);
    }

    $scope.reset = function() {
      $scope.showProgress = 0;
      $scope.displayButtons();
      ExerciseModel.resetValues();
    };

    angular.element(".content").html(GetJson.getContent());
    $compile(angular.element(".content").contents())($scope);

    $scope.getScore = function() {
      var sum = ExerciseModel.getScore();
      $scope.showProgress = sum;
      if ($scope.showProgress === 5) {
        $scope.checkButtonVisibility = true;
        $scope.getScoreButtonVisibility = true;
      }
    }
  }
})();
