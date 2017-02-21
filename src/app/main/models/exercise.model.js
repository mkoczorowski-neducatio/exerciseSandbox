(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('ExerciseModel', ExerciseModelService);

  /** @ngInject */
  function ExerciseModelService() {
    var _list = [], _localStorageValues = [], _localStorageKeys = [];
    var sum = 0;

    return {
      getList: function() {
        return _list;
      },

      getSum:function() {
        return sum;
      },

      setLocalStorageData: function(key, localStorage) {
        _localStorageKeys.push(key);
        _localStorageValues.push(localStorage);
        console.log(_localStorageValues);
        console.log(_localStorageKeys);
      },

      getLocalStorageValues: function() {
        return _localStorageValues;
      },

      getLocalStorageKeys: function() {
        return _localStorageKeys;
      },

      addItem: function(model) {
        return _list.push(model);
      },

      evaluateItems: function() {
        _list.forEach(function(element) {
          element.evaluate();
        });
        return _list;
      },

      resetValues: function() {
        _list.forEach(function(element) {
          element.reset();
        });
        return _list;
      },

      getScore: function() {
        _list.forEach(function(element) {
        });
        return _list.reduce(function(sum, element) {

          return sum + ((element.isCorrect) ? 1 : 0);
        }, 0);
      }
    }
  }
})();
