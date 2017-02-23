(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('gap', Gap);

  function Gap(Item, GetJson, ExerciseModel, LocalStorage, $stateParams, $localStorage) {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'app/main/directive/html/gap.directive.html',
      link: function($scope, element, attrs) {
        var Model = new Item();
        Model.setId(attrs.id);
        $scope.Model = Model;
        ExerciseModel.addItem(Model);

        $scope.$storage = $localStorage.$default({
          addClass: [],
          arr2 : [],
          arr3: []
        });

        // delete $localStorage.addClass;
        // delete $localStorage.arr2;
        // delete $localStorage.arr3;

        var storageValues = LocalStorage.getLocalStorageValues();
        var storageKeys = LocalStorage.getLocalStorageKeys();
        var eachViewStorage = LocalStorage.getEachViewStorage();
        var arr = [],
            eachViewArr = [],
            containThisView = "";

        for (var key in eachViewStorage) {
          eachViewArr.push(eachViewStorage[key]);
        }

        for (var i=0; i<= eachViewArr.length; i++) {
          if(i == $stateParams.id) {
            containThisView = eachViewArr[i];
          }
        }

        for (var key in containThisView) {
          if (Model.id == key) {
            $scope.Model.inputValue = containThisView[key];
          }
        }

        GetJson.getAnswers().forEach(function(answer) {
          if (Model.id === answer.id) {
            Model.setOptions(answer.options);
            Model.setAnswers(answer.answers);
            Model.setInputType(answer.type);
          }
        });

        for (var key in Model.options) {
          arr.push(Model.options[key]);
        }

        if ($localStorage.arr2.length === 0) {
          Model.options = arr;
        } else {
          Model.options = $localStorage.arr3;
        }

        $scope.$on("addToOptions", function(param) {
          $localStorage.addClass = param.targetScope.classNameValue
          $localStorage.arr3 = arr.concat($localStorage.arr2);

          if ($localStorage.arr2.indexOf($localStorage.addClass) == -1) {
            $localStorage.arr2.push($localStorage.addClass);
          }

          Model.options = $localStorage.arr3;
        });
      }
    };
  };
})();
