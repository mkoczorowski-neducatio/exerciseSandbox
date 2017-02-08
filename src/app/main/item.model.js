(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('Item', ItemModel);

  /** @ngInject */
  function ItemModel() {

    var Item = function(id, answers) {
      this.id = id || 0;
      this.answers = answers || "";

      this.setId = function(id) {
        this.id = id;
      };

      this.setAnswers = function(answer) {
        this.answer = answer;
      };

      this.getId = function() {
        return this.id;
      };

      this.getAnswers = function() {
        return this.answer;
      };
    }
    return Item;
  }
})();
