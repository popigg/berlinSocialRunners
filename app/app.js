'use strict';

angular.module('app', 
  [ 
    'ui.router', 
    'uiGmapgoogle-maps'
  ]
);

angular.module( 'app' ).config(
  [ '$locationProvider',

    function ( $locationProvider ){
      $locationProvider.html5Mode( true );
    }
  ]
);

angular.module('app').config(  
  [    
    '$stateProvider', 
    '$urlRouterProvider',      

    function ($stateProvider, $urlRouterProvider) { 

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('start', {
            abstract: true,                                              
            views: {
              navbar: { 
                templateUrl: 'tpl/navbar.html',
                controller: 'NavbarController'
              },
              mainView: { 
                templateUrl: 'tpl/mainView.html',
                controller: 'MainController'
              }
            },                       
        })
        .state('start.home', {
          url: '/',                    
        })
        .state('start.what', {
          url: '/what',                    
        }) 
        .state('start.where', {
          url: '/where',        
        })
        .state('start.how', {
          url: '/how',          
        })
        .state('start.enjoy', {
          url: '/enjoy',          
        })          
                                           
    }

  ]
);

angular.module('app');