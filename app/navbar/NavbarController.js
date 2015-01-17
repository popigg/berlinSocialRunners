'use strict';

angular.module('app').controller('NavbarController', 
	[
		'$scope',				
		function($scope) {						

			$scope.menu = [
				{ link: 'what',  text: 'The Group' },
				{ link: 'where', text: 'Find Us' },
				{ link: 'how', 	 text: 'Meetings' },								
				{ link: 'enjoy', text: 'Have fun' },
			];		
		}
	]
)