(function() {
  'use strict';

  angular
    .module('cartProject')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/#');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/views/task1.html',
          controller: 'MainController'
        });
    });
})();
