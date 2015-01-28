(function() {
    'use strict';

    angular
        .module('app')
        .controller('NavbarController', NavbarController);

    /* @ngInject */
    function NavbarController() {
        /*jshint validthis: true */
        var vm = this;
        vm.menu = [
				{ link: 'what',  text: 'The Group' },
				{ link: 'where', text: 'Find Us' },
				{ link: 'how', 	 text: 'Meetings' },								
				{ link: 'enjoy', text: 'Have fun' },
			];      
    }
})();