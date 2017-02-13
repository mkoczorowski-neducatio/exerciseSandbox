(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('gap2', Gap2);

  function Gap2(Item, GetJson, ExerciseModel) {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'app/main/directive/html/gap.directive.html',
      link: function($scope, element, attrs) {

        var Model = new Item();
        Model.setId(attrs.id);
        $scope.Model = Model;

        ExerciseModel.addItem(Model);

        //template 1
        GetJson.getData2().then(function(data) {
          data.forEach(function(answer) {
            if (Model.id === answer.id) {
              Model.setOptions(answer.options);
              Model.setAnswers(answer.answers);
              Model.setInputType(answer.type);
            }
          });
        });

      }
    };
  };
})();