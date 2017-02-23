(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $localStorage, Item, GetJson, ExerciseModel, LocalStorage, $compile, $stateParams) {
    $scope.$storage = $localStorage.$default({
      addedClassNames: "",
      eachViews: [],
      ob: {},
      save: []
    });

    $scope.showProgress = 0;

    angular.element(".content").html(GetJson.getContent());
    $compile(angular.element(".content").contents())($scope);

    LocalStorage.setEachViewStorage($localStorage.eachViews);

    for (var key in $localStorage.ob) {
      LocalStorage.setLocalStorageData(key, $localStorage.ob[key]);
    }

    // <-------------------------- list of functions ------------------------->
    $scope.addClassName = function(classNameValue) {
      $localStorage.addedClassNames = classNameValue;
      $scope.$broadcast("addToOptions", $localStorage.addedClassNames);
    };

    $scope.rmLocalStorageData = function() {
      delete $localStorage.ob;
      $localStorage.ob = {};
      delete $localStorage.eachViews;
      $localStorage.eachViews = [];
      delete $localStorage.addedClassNames;
      $localStorage.addedClassNames = [];
    };

    $scope.displayButtons = function() {
      $scope.checkButtonVisibility = false;
      $scope.getScoreButtonVisibility = false;
    };

    $scope.checkAnswers = function() {
      ExerciseModel.evaluateItems();
      $localStorage.save = $localStorage.ob;
      $localStorage.eachViews[$stateParams.id] = $localStorage.save;

      ExerciseModel.getList().forEach(function(element) {
        $localStorage.save[element.id] = element.inputValue;
      });

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
