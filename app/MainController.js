'use strict';

angular.module('app').controller('MainController', 
	[ 	
		'$rootScope',
		'$scope',
		'$document',
		'$window',
		'$state',

		function($rootScope, $scope, $document, $window, $state) {

			// State scroll
			
			var scrollToElement = function (elem) {
				Element.prototype.documentOffsetTop = function () {
					return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
				};
				var top = $document[0].getElementById(elem).documentOffsetTop() - ($window.innerHeight / 11 );
				$window.scrollTo( 0, top );
			};

			$scope.$on('$viewContentLoaded', function(event){								

				scrollToElement($state.current.url);
			});										

			$rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {					

					scrollToElement(toState.url);
				}
			);	

			// maps	controller	

			$scope.map = {		
			    center: {
			        latitude: 52.516002,
			        longitude: 13.376587
			    },
			    zoom: 16,
			    options : {
			    	 scrollwheel: false
		    	}
			};
			$scope.marker = {
				id: 1,
				coords: {
						// tiergarten				
						latitude: 52.516002,
		        		longitude: 13.376587
			        },			        				
				icon: 'img/locations/marker.png',
				options: { 
					labelContent: '<img src="img/locations/BSRicon.png"><span> Saturday 10 am</span>',
					labelClass	: 'marker-label',
					labelAnchor	: '45 65'
			 	}
			};
		}
	]
);