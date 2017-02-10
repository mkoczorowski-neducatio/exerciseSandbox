(function() {
  'use strict';

  angular
    .module('cartProject')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/task1');
      $stateProvider
        .state('task1', {
          url: '/task1',
          templateUrl: 'app/main/views/task1.html',
          controller: 'MainController'
        })
        .state('task2', {
          url: '/task2',
          templateUrl: 'app/main/views/task2.html',
          controller: 'MainController'
        })
    });
})();
