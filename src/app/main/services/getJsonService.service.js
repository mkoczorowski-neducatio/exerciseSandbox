(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('GetJson', GetJsonService);

    function GetJsonService($http, $q) {
      var _data = null;
      return {
        loadJson: function(id) {
          return $http.get('answers'+Number(id)+'.json').then(function(data) {
            _data = data.data;
          });
        },
        getContent: function() {
          return _data.content;
        },
        getAnswers:  function() {
          return $q.when(_data.answers);
        }
      };
    }
})();
