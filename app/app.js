'use strict';

angular.module('app', 
  [ 
    'ui.router', 
    'uiGmapgoogle-maps'
  ]
);

// angular.module( 'app' ).config(
//   [ '$locationProvider',

//     function ( $locationProvider ){
//       $locationProvider.html5Mode( true );
//     }
//   ]
// );

angular.module('app').config(  
  [ 
    '$stateProvider', 
    '$urlRouterProvider',    

    function ($stateProvider, $urlRouterProvider) {      

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
            abstract: true,
            url: '/',                                  
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
        .state('home.what', {
          url: 'what',                    
        }) 
        .state('home.where', {
          url: 'where',        
        })
        .state('home.how', {
          url: 'how',          
        })
        .state('home.enjoy', {
          url: 'enjoy',          
        })      
                                           
    }

  ]
);

angular.module('app');