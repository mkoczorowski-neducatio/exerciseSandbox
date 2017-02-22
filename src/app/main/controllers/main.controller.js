(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $localStorage, Item, GetJson, ExerciseModel, LocalStorage, $compile, $stateParams) {
    $scope.$storage = $localStorage.$default({
      arr: [],
      ob: {},
      addedClassNames: [],
      eachViews: []
    });


    $scope.classNameValue = "";
    $scope.showProgress = 0;

    angular.element(".content").html(GetJson.getContent());
    $compile(angular.element(".content").contents())($scope);

    for (var key in $localStorage.ob) {
      LocalStorage.setLocalStorageData(key, $localStorage.ob[key]);
    }

    LocalStorage.setListOfClasses($localStorage.addedClassNames);

    $localStorage.eachViews[$stateParams.id] = $localStorage.ob;

    LocalStorage.setEachViewStorage($localStorage.eachViews);

    $scope.rmEachView = function() {
      delete $localStorage.eachViews;
      $localStorage.eachViews = [];
    };

    $scope.addClassName = function() {
      $localStorage.addedClassNames.push($scope.classNameValue);
      console.log($localStorage.addedClassNames);
    };

    $scope.rmClassList = function() {
      delete $localStorage.addedClassNames;
      $localStorage.addedClassNames = [];
      console.log($localStorage.addedClassNames);
    };

    $scope.displayClassList = function() {
      console.log($localStorage.eachViews);
      console.log($localStorage.addedClassNames);
    };

    $scope.rmLocalStorageData = function() {
      delete $localStorage.arr;
      $localStorage.arr = [];
      delete $localStorage.ob;
      $localStorage.ob = {};
      console.log($localStorage.arr);
    };

    $scope.displayButtons = function() {
      $scope.checkButtonVisibility = false;
      $scope.getScoreButtonVisibility = false;
    };

    $scope.checkAnswers = function() {
      console.log($localStorage.eachViews);
      console.log($localStorage.ob);
      ExerciseModel.evaluateItems();
      $localStorage.arr.forEach(function(element) {
        if (element) {
          $localStorage.arr.splice(0,3);
        }
      });

      ExerciseModel.getList().forEach(function(element) {
        $localStorage.ob[element.id] = element.inputValue;
      });
      //console.log($localStorage.ob);
    };

    $scope.reset = function() {
      $scope.showProgress = 0;
      $scope.displayButtons();
      ExerciseModel.resetValues();
    };

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
