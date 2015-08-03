(function() {
    'use strict';

    angular
        .module('app')
        .factory('SmoothScrollService', SmoothScrollService);

        SmoothScrollService.$inject = ['$timeout', '$window', '$q', 'SmoothScrollServiceUtils'];


    /* @ngInject */
    function SmoothScrollService($timeout, $window, $q, SmoothScrollServiceUtils) {

		var requestAnimationFrame = ( function() {
			return $window.requestAnimationFrame ||
			$window.webkitRequestAnimationFrame ||
			$window.mozRequestAnimationFrame ||
			function( callback ) {
				window.setTimeout( callback, 1000 / 60 );
			};
		})();

    	requestAnimationFrame.bind($window);

        var service = {
            scrollTo: scrollTo
        };
        return service;

        ////////////////

        function scrollTo (to, duration) {
			var self = this;

			var deferred = $q.defer();

			var doc = SmoothScrollServiceUtils.getScrollTopElement();

			var start = doc.scrollTop;
			var change = to - start;
			var currentTime = 0;
			var time;

			var animateScroll = function() {
				var now = new Date().getTime();
				var delta = now - ( time || now );
				time = now;

				currentTime += delta;
				$window.scrollTo( 0, SmoothScrollServiceUtils.easeInOutQuad(currentTime, start, change, duration) );

				if ( currentTime < duration ) {
					requestAnimationFrame( animateScroll );
				} else {
					deferred.resolve();
				}
			};

			animateScroll();

			return deferred.promise;
		}
    }
})();