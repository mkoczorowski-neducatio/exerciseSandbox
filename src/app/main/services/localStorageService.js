(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('LocalStorage', LocalStorageService);

  /** @ngInject */
  function LocalStorageService() {
    var _localStorageValues = [],
        _localStorageKeys = [],
        _addedClasses = [];

    return {
      setLocalStorageData: function(key, localStorage) {
        _localStorageKeys.push(key);
        _localStorageValues.push(localStorage);
      },

      getLocalStorageValues: function() {
        return _localStorageValues;
      },

      getLocalStorageKeys: function() {
        return _localStorageKeys;
      },

      setListOfClasses: function(classNameArr) {
        _addedClasses = classNameArr;
      },

      getListOfClasses: function() {
        return _addedClasses;
      }
    }
  }
})();
