(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('ExerciseModel', ExerciseModelService);

  /** @ngInject */
  function ExerciseModelService() {
    var _list = [];
    return {
      getList: function() {
        return _list;
      },
      addPeople: function(model) {
        return _list.push(model);
        console.log(_list);
      },
      evaluateItems: function() {
        _list.forEach(function(element) {
          if (element.answer.indexOf(element.inputValue) !== -1) {
            //console.log(element.inputValue);
            element.displayOkIconValue = true;
            element.displayWrongIconValue = false;
          } else {
            element.displayWrongIconValue = true;
            element.displayOkIconValue = false;
          }
        });
        return _list;
      }
    }
  }
})();
