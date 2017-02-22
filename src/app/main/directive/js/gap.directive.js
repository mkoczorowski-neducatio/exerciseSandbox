(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('gap', Gap);

  function Gap(Item, GetJson, ExerciseModel, LocalStorage, $stateParams) {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'app/main/directive/html/gap.directive.html',
      link: function($scope, element, attrs) {
        var Model = new Item();
        Model.setId(attrs.id);
        $scope.Model = Model;
        ExerciseModel.addItem(Model);
        //get keys and values from associated table

        var storageValues = LocalStorage.getLocalStorageValues();
        var storageKeys = LocalStorage.getLocalStorageKeys();
        var eachViewStorage = LocalStorage.getEachViewStorage();
        //console.log(eachViewStorage);

        //loop via array, which contains keys from localStorage data and compare with Model.id
        // for (var i=0; i<eachViewStorage.length; i++) {
        //   if (Model.id == eachViewStorage[i]) {
        //     // if the same, set value as inputValue in Model
        //     $scope.Model.inputValue = storageValues[i];
        //   }
        // }
        var eachViewArr = [];
        var containThisView = "";
        for (var key in eachViewStorage) {
          eachViewArr.push(eachViewStorage[key]);
        }
        //console.log(eachViewArr);

        for (var i=0; i<= eachViewArr.length; i++) {
          if(i == $stateParams.id) {
            containThisView = eachViewArr[i];
          };
          //console.log(i, eachViewArr[i]);
        }
        //console.log(containThisView);
        for (var key in containThisView) {
          //console.log(containThisView[key]);
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

        var arr = [], arr2 = [];

        for (var key in Model.options) {
          arr.push(Model.options[key]);
        }

        var localStorageData = LocalStorage.getListOfClasses();

        arr2 = arr.concat(localStorageData);

        Model.options = arr2;
      }
    };
  };
})();
