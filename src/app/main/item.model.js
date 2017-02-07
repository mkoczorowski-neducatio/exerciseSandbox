(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('CartModel', ItemModel);

  /** @ngInject */
  function ItemModel() {

    var Item = function() {

    }
    return Item;
  }
})();
