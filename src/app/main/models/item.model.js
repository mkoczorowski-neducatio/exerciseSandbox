(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('Item', ItemModel);

  /** @ngInject */
  function ItemModel() {

    var Item = function(id, answer, inputValue, okIcon, wrongIcon) {
      this.id = id || 0;
      this.answer = answer || "";
      this.inputValue = inputValue || "";
      this.okIcon = okIcon || false;
      this.wrongIcon = wrongIcon || false;
    }
    Item.prototype = {
      setId: function(id) {
        this.id = id;
      },

      setAnswers: function(answer) {
        this.answer = answer;
      },

      setInputValue: function(inputValue) {
        this.inputValue = inputValue;
      },

      getId: function() {
        return this.id;
      },

      getAnswers: function() {
        return this.answer;
      },

      getInputValue: function() {
        return this.inputValue;
      },

      setDisplayOkIcon: function(okIcon) {
        this.okIcon = okIcon;
      },

      setDisplayWrongIcon: function(wrongIcon) {
        this.wrongIcon = wrongIcon;
      }

    };
    return Item;
  }
})();
