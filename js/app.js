var runnersApp = angular.module('app', ['ngRoute', 'ui.bootstrap' ,'runnersAppCtrls']);
 
runnersApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'tpl/partials/home.html',
        controller: 'homeCtrl'
      })
      .when('/members', {
        templateUrl: 'tpl/partials/members.html',
        controller: 'membersCtrl'
      })
      .when('/locations', {
        templateUrl: 'tpl/partials/locations.html',
        controller: 'locationsCtrl'
      })
      .when('/newsletters', {
        templateUrl: 'tpl/partials/newsletters.html',
        controller: 'newslettersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);