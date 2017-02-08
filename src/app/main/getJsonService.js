(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('GetJson', GetJsonService);

    function GetJsonService($http, $q) {
     var deferred = $q.defer();
     $http.get('answers.json').success(function(data) {
        deferred.resolve(data);
      });
      return {
        getData:  function() {
          return deferred.promise;
        },

      };
    }
})();
