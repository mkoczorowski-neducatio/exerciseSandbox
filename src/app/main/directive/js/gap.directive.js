(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('gap', Gap);

  function Gap(Item, GetJson, ExerciseModel) {
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
        var storageValues = ExerciseModel.getLocalStorageValues();
        var storageKeys = ExerciseModel.getLocalStorageKeys();

        //loop via array, which contains keys from localStorage data and compare with Model.id
        for (var i=0; i<storageKeys.length; i++) {
          if (Model.id == storageKeys[i]) {
            console.log(storageValues[i]);
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
      }
    };
  };
})();
