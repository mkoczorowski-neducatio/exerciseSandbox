(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('GetJson', GetJsonService);

    function GetJsonService($http, $q) {
     var deferred = $q.defer();
     var deferred2 = $q.defer();
      $http.get('answers.json').success(function(data) {
        deferred.resolve(data);
      });

      $http.get('answers2.json').success(function(data) {
         deferred2.resolve(data);
      });
      return {
        getData:  function() {
          return deferred.promise;
        },
        getData2: function() {
          return deferred2.promise;
        }

      };
    }
})();
