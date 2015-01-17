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

    // The usual code to catch any url, but instead of a string ("/notfound") we use a function
    // which receives $injector and $location.
    // We could check which URL the user wanted using $location but in this case we are going
    // to simply send them to the error state.
    // We then tell the provider that we handled the request.

    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.invoke(['$state', function ( $state ) {
        $state.transitionTo( 'start.home' );
      }]);
      return true;
    });

    // FIX for trailing slashes. Gracefully "borrowed" from https://github.com/angular-ui/ui-router/issues/50
    $urlRouterProvider.rule( function ( $injector, $location ) {
      if ( $location.protocol() === 'file' ) {
        return;
      }

      var path = $location.path(), // Note: misnomer. This returns a query object, not a search string
        search = $location.search(), params;

      // check to see if the path already ends in '/'
      if ( path[path.length - 1] === '/' ) {
        return;
      }

      // If there was no search string / query params, return with a `/`
      if ( Object.keys( search ).length === 0 ) {
        return path + '/';
      }

      // Otherwise build the search string and return a `/?` prefix
      params = [];
      angular.forEach( search, function ( v, k ) {
        params.push( k + '=' + v );
      } );
      return path + '/?' + params.join( '&' );
    });

                                           
    }

  ]
);

angular.module('app');