'use strict';

angular.module('app', ['ngRoute', 'google-maps'.ns()])
  .run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
  }]);

angular.module('app').config(
  [ '$routeProvider', 
      function($routeProvider) {
        $routeProvider
          .when('/', {
              templateUrl: 'tpl/home.html',
              controller: 'Controller'
          })                  
        .otherwise({
          redirectTo: '/'
        });        
      }
  ]
);

angular.module('app')