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
            //console.log(element.inputValue);
            element.displayOkIconValue = true;
            element.displayWrongIconValue = false;
          } else {
            element.displayWrongIconValue = true;
            element.displayOkIconValue = false;
          }
        });
        return listOfObjects.getList();
      }

    }
  }
})();
