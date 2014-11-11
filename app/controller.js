'use strict';

angular.module('app').controller('Controller', 
	[ 	'$scope',
		'$location',
		'$anchorScroll',		

		function($scope, $location, $anchorScroll) {

			$scope.goTo = function(hash) {
    			var newHash = hash;

		        if ($location.hash() !== newHash) {		          
		          $location.hash(hash);
		        } else {
		          $anchorScroll();
		        }
			};

			$scope.isActive = function (hash) {	
				if (hash == $location.hash()) {
					return true;
				}
				return false;
		    };

			$scope.menu = [
				{ link: 'what', text: 'The Group' },
				{ link: 'where', text: 'Find Us' },
				{ link: 'how', text: 'Meetings' },								
				{ link: 'enjoy', text: 'Have fun' },
			];

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