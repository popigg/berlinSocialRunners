var runnersApp = angular.module('app', ['ngRoute', 'ui.bootstrap' ,'runnersAppCtrls', 'google-maps']);
 
runnersApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'tpl/partials/home.html',
        controller: 'homeCtrl'
      })      
      .when('/locations', {
        templateUrl: 'tpl/partials/locations.html',
        controller: 'locationsCtrl'
      })
      .when('/memories', {
        templateUrl: 'tpl/partials/memories.html',
        controller: 'memoriesCtrl'
      })
      // .when('/newsletters', {
      //   templateUrl: 'tpl/partials/newsletters.html',
      //   controller: 'newslettersCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  }
]);