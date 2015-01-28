(function() {
    'use strict';

    angular
        .module('app')
        .controller('MapController', MapController);

        MapController.$inject = ['$window'];

    /* @ngInject */
    function MapController($window) {
        /*jshint validthis: true */
        var vm = this;               	

        var isDraggable = $window.innerWidth > 480 ? true : false;

        vm.map = {		
			    center: {
			        latitude: 	52.516002,
			        longitude: 	13.376587
			    },
			    zoom: 16,
			    options : {
					scrollwheel: 	false,
					draggable: 		isDraggable,
					panControl: 	true
		    	}
		};
		
		vm.marker = {
			id: 1,
			coords: {
				// tiergarten				
				latitude: 	52.516002,
        		longitude: 	13.376587
	        },			        				
			icon: 'img/locations/marker.png',
			options: { 
				labelContent: '<img src="img/locations/BSRicon.png"><span> Saturday 10 am</span>',
				labelClass	: 'marker-label',
				labelAnchor	: '45 65'
		 	}
		};			
    }
})();