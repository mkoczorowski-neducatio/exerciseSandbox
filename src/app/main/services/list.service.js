(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('listOfObjects', listOfObjectsService);

    function listOfObjectsService() {
      var _list = [];
      return {
        getList: function() {
          return _list;
        },
        addPeople: function(model) {
          return _list.push(model);
          console.log(_list);
        }
      }
    }
  })();
