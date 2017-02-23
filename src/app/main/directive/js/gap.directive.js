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

        var storageValues = LocalStorage.getLocalStorageValues();
        var storageKeys = LocalStorage.getLocalStorageKeys();
        var eachViewStorage = LocalStorage.getEachViewStorage();
        var localStorageData = LocalStorage.getListOfClasses();

        var arr = [],
          arr2 = [],
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

        arr2 = arr.concat(localStorageData);

        Model.options = arr2;
      }
    };
  };
})();
