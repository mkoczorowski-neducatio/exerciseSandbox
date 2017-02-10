(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('ExerciseModel', ExerciseModelService);

  /** @ngInject */
  function ExerciseModelService() {
    var _list = [];
    var sum = 0;
    return {

      getList: function() {
        return _list;
      },

      getSum:function() {
        return sum;
      },

      addPeople: function(model) {
        return _list.push(model);
        console.log(_list);
      },

      evaluateItems: function() {
        _list.forEach(function(element) {
          if (element.answer.indexOf(element.inputValue) !== -1) {
            element.displayOkIconValue = true;
            element.displayWrongIconValue = false;
          } else {
            element.displayOkIconValue = false;
            element.displayWrongIconValue = true;
          }
        });
        return _list;
      },

      resetValues: function() {
        _list.forEach(function(element) {
          if (element.answer.length > 0) {
            element.inputValue = "";
            element.displayOkIconValue = false;
            element.displayWrongIconValue = false;
          }
        });
        return _list;
      },

      getScore: function() {
        sum=0;
        _list.forEach(function(element) {
          if(element.displayOkIconValue === true) {
            this.getSum(++sum);
          }
        }, this);
        return _list;
      }

    }
  }
})();
