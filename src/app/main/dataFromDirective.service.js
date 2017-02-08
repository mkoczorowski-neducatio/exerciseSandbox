(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('dataFromDirective', dataFromDirectiveService);

    function dataFromDirectiveService() {

      return {
        setValue: function(value) {
          this.value = value;
          console.log(this.value);
        },
        checkAnswers: function() {
          console.log($scope.inputValue);
        }
      }
    }
  })();
