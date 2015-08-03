'use strict';

angular.module('app').factory('SmoothScrollServiceUtils',
    [   '$window',
        '$document',

        function SmoothScrollServiceUtils($window, $document) {

            return {
                getScrollTopElement: getScrollTopElement,
                easeInOutQuad: easeInOutQuad,
                calculateScrollingDistance: calculateScrollingDistance
            };

            function calculateScrollingDistance(id)
            {
                var elem = $document[0].getElementById(id);   
                // navigation bar would be substracted
                var navBar = $document[0].getElementsByClassName('navbar-default');

                return parseInt(elem.offsetTop) - parseInt(navBar[0].offsetHeight);
            }

            function getScrollTopElement () {
                // figure out if this is moz || IE because they use documentElement
                var isMozillaOrIE = $window.navigator.userAgent.indexOf('Firefox') != -1
                    || $window.navigator.userAgent.indexOf('MSIE') != -1;

                if ( isMozillaOrIE ) {
                    return $document[0].documentElement;
                }

                return $document[0].body;
            };

            function easeInOutQuad(currentTime, start, change, duration) {
                currentTime /= duration / 2;

                if ( currentTime < 1 ) {
                    return change / 2 * currentTime * currentTime + start
                }

                currentTime--;

                return -change / 2 * ( currentTime * ( currentTime - 2 ) - 1) + start;
            };
        }
    ]
);