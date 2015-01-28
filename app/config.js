(function() {
    'use strict';

    angular
        .module('app')
        .config(configure);

        configure.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

        function configure($locationProvider, $stateProvider, $urlRouterProvider) {

            $locationProvider.html5Mode( true ); 

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('start', {
                    abstract: true,                                              
                    views: {
                        navbar: {                             
                            controller:     'NavbarController',                
                            controllerAs:   'navbar',
                            templateUrl:    'tpl/navbar.html'                
                        },
                        main: {                             
                            controller:     'MainController',
                            controllerAs:   'main',
                            templateUrl:    'tpl/main.html'
                        },
                        footer: { 
                            templateUrl: 'tpl/footer.html',
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
})();