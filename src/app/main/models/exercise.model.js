(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('ExerciseModel', ExerciseModelService);

  /** @ngInject */
  function ExerciseModelService(listOfObjects) {

    return {
      evaluateItems: function() {
        listOfObjects.getList().forEach(function(element) {
          if (element.answer.indexOf(element.inputValue) !== -1) {
            console.log(element.inputValue);
            console.log(element.displayOkIconValue = true);
          }

          if (element.displayOkIconValue == true) {
            console.log("jest");
          }
        });
        return listOfObjects.getList();
      }

    }
  }
})();
