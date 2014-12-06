'use strict';

angular.module('app', ['ngRoute', 'uiGmapgoogle-maps'])
  .run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
  }]);

angular.module('app').config(
  [ '$routeProvider', 
    '$locationProvider',
      function($routeProvider, $locationProvider) {
        $routeProvider
          .when('/', {
              templateUrl: 'tpl/home.html',
          })          
          .otherwise({
            redirectTo: '/'
          });

          $locationProvider.html5Mode(true);        
      }
  ]
);

angular.module('app')