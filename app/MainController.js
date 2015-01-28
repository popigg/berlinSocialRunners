(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

        MainController.$inject = ['$document', '$rootScope', '$scope', '$state', '$window'];

    /* @ngInject */
    function MainController($document, $rootScope, $scope, $state, $window) {
        /*jshint validthis: true */
        var vm = this;                		
		
		$scope.$on('$viewContentLoaded', function(event){							
			if ($state.current.name !== 'start.home') {
				scrollToElement($state.current.url.substr(1));	
			}			
		});

		$rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {					
				scrollToElement(toState.url.substr(1));
			}
		);		

		var scrollToElement = function (elem) {
			Element.prototype.documentOffsetTop = function () {
				return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
			};
			var top = $document[0].getElementById(elem).documentOffsetTop() - ($window.innerHeight / 9 );				
			$window.scrollTo( 0, top );
		};		
        
    }
})();