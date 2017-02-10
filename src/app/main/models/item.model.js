(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('Item', ItemModel);

  /** @ngInject */
  function ItemModel() {

    var Item = function(id, answer, inputValue) {
      this.id = id || 0;
      this.answer = answer || "";
      this.inputValue = inputValue || "";
    }

    Item.prototype = {
      setId: function(id) {
        this.id = id;
      },

      setAnswers: function(answer) {
        this.answer = answer;
      }
    };
    return Item;
  }
})();
