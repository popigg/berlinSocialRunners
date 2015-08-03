(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

        MainController.$inject = [        	
        	'$document', 
        	'$rootScope', 
        	'$scope', 
        	'$state',
        	'$timeout',        	
        	'SmoothScrollService', 
        	'SmoothScrollServiceUtils'
    	];

    /* @ngInject */
    function MainController(    	
    	$document, 
    	$rootScope, 
    	$scope, 
    	$state, 
    	$timeout,   	
    	SmoothScrollService, 
    	SmoothScrollServiceUtils
    	) {

        /*jshint validthis: true */
        var vm = this;

        $timeout(function(){
        	vm.mainView = 'active'             
        }, 300);
        
		
		$scope.$on('$viewContentLoaded', function(event){							
			if ($state.current.name !== 'start.home') {
				var distance = SmoothScrollServiceUtils.calculateScrollingDistance($state.current.url.substr(1));							
				SmoothScrollService.scrollTo(distance - 80, 1000);				
			}			
		});

		$rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {																	
				var distance = SmoothScrollServiceUtils.calculateScrollingDistance(toState.url.substr(1));				

				SmoothScrollService.scrollTo(distance, 1000);
			}
		);				        
    }
})();