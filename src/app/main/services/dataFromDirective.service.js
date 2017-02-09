(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('dataFromDirective', dataFromDirectiveService);

    function dataFromDirectiveService() {

      return {
        setValue: function(value) {
          this.value = value;
          return this.value;
          //console.log(this.value);
        },
        setDisplayOkIcon: function(displayOkIcon) {
          this.displayOkIcon = displayOkIcon;
          return this.displayOkIcon;
        }
      }
    }
  })();
