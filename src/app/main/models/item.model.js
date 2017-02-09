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

      this.setId = function(id) {
        this.id = id;
      };

      this.setAnswers = function(answer) {
        this.answer = answer;
      };

      this.setInputValue = function(inputValue) {
        this.inputValue = inputValue;
      };

      this.getId = function() {
        return this.id;
      };

      this.getAnswers = function() {
        return this.answer;
      };

      this.getInputValue = function() {
        return this.inputValue;
      };

      this.setDisplayOkIcon = function(okIcon) {
        this.okIcon = okIcon;
      };

      this.setDisplayWrongIcon = function(wrongIcon) {
        this.wrongIcon = wrongIcon;
      };
    }
    return Item;
  }
})();
