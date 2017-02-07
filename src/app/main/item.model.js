(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('CartModel', ItemModel);

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
    }
    return Item;
  }
})();
