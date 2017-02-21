(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('gap', Gap);

  function Gap(Item, GetJson, ExerciseModel, LocalStorage) {
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
        //loop via array, which contains keys from localStorage data and compare with Model.id
        for (var i=0; i<storageKeys.length; i++) {
          if (Model.id == storageKeys[i]) {
            // if the same, set value as inputValue in Model
            $scope.Model.inputValue = storageValues[i];
          }
        }

        GetJson.getAnswers().forEach(function(answer) {
          if (Model.id === answer.id) {
            Model.setOptions(answer.options);
            Model.setAnswers(answer.answers);
            Model.setInputType(answer.type);
          }
        });

        var arr = [];
        var arr2 = [];
        for (var key in Model.options) {
          arr.push(Model.options[key]);
        }

        var localStorageData = LocalStorage.getListOfClasses();
        console.log(localStorageData);
        arr2 = arr.concat(localStorageData);
        console.log(arr2);
        Model.options = arr2;
        // arr.push(Model.inputValue);
        // Model.options = arr;
        //console.log(Model);
      }
    };
  };
})();
