var runnersAppCtrls = angular.module('runnersAppCtrls', []);

function navbarController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}

runnersAppCtrls.controller('homeCtrl', function($scope) {

	$scope.interval = 8000;
	$scope.slides = [
		{
			image: 'img/index/carousel1.jpg',
			active: 'active',
		},
		{
			image: 'img/index/carousel2.jpg',			
		},
		{
			image: 'img/index/carousel3.jpg',			
		},
		{
			image: 'img/index/carousel4.jpg',			
		}
	];	

	$scope.oneAtATime = true;

	$scope.panelItems = [
	    {	      
	      panelImgSrc: 'img/index/meeting2.png', 
	      panelTitle: 'MEETINGS', 	
	      isOpen: 'true',      
	      bodyTitle: 'OUR MEETINGS',
	      bodyText: 'Join and post new meetings in your city. You could choose your favourite parks or routes, share with us! Our runs are always by time or distance. Almost all runs we can start and end together. We are not competitive, we have fast and slow runners. If you are looking for meeting new friends, keep them motivated to run and have company when training for a race, here we are! We also participate in some local races: Asics Race Berlin, Half Marathon… Always when we finish our training we grab a snack or coffee. Remember "Running is a lot more fun in a group":',
	      bodyList: [
	       'Create your own event in Berlin',   
	       'Decide the route, day and time and share with us',    
	       'And…keep in mind a good place for drinks after!',   
	      ]
	    },  
	    {	      
	      panelImgSrc: 'img/index/route2.png', 
	      panelTitle: 'ROUTES', 	     
	      bodyTitle: 'AM I NEAR BY ...',
	      bodyText: 'You could choose your best routes and share with the group. We usually run in the difierent parks in Berlin. You could surprise us with new routes and we surprise you with the best company. Discover new hills, new roads, new parks. All the routes are wellcome because if you run we run. Define distances, places, logs, altitude, elevation and the ability to share routes!',
	        bodyList: [
		     'Create your own event in Berlin',
		     'Place',   
		     'Distance and peace',    
		     'Running Level',
		     'Drinks after place',    
	    	]  
	    },
	    {	      
	      panelImgSrc: 'img/index/sport2.png', 
	      panelTitle: 'SPORT-RELATED', 	      
	      bodyTitle: 'WHAT ELSE?',
	      bodyText: 'Join us and you will be discovering all the topics regarding runners in Berlin…and in the world: Runners, training, races, health, fashion runners, womens, coffee places, shops for runners. And important news about BSR!',      
	    },
	  ];  	 
});

runnersAppCtrls.controller('memoriesCtrl', function($scope, $modal) {
	$scope.message = 'A small selection of our post run coffee photos.';	
	$scope.imgs = [		
		'img/memories/memories1.jpg',
		'img/memories/memories2.jpg',					
		'img/memories/memories3.jpg',			
		'img/memories/memories10.jpg',
		'img/memories/memories4.jpg',
		'img/memories/memories5.jpg',
		'img/memories/memories6.jpg',
		'img/memories/memories7.jpg',	
		'img/memories/memories8.jpg',	
		'img/memories/memories9.jpg',				
		 ];

	$scope.open = function (imgSrc) {

	    var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',    
	      resolve: {
	        items: function () {
	          return $scope.src;
	        }
	      }
	    });    
  	}; 
});

runnersAppCtrls.controller('locationsCtrl', function($scope) {
	$scope.message = 'Find what are the best locations to join to the group. Please let us know if there are another places we missed on the map.';
	
	$scope.map = {		
	    center: {
	        latitude: 52.517571,
	        longitude: 13.41
	    },
	    zoom: 12
	};
	$scope.markers = {		
		models: [
			{
				// tiergarten				
				latitude: 52.516002,
        		longitude: 13.376587
	        },	        
	      	{
	      		// volspark friedrichain	      		
				latitude: 52.528075,
	        	longitude: 13.425541
	        },	
	        {
	        	// treptower park	        	
				latitude: 52.493010,
	        	longitude: 13.461626
	        },	
	        {
	        	// grunewald	        	
				latitude: 52.488884,
	        	longitude: 13.261605
	        },	        
		],
		coords: 'self',
		icon: 'img/locations/marker.png'
	};
});

// runnersAppCtrls.controller('newslettersCtrl', function($scope) {
//   	$scope.message = 'Contact us! JK. This is just a demo.';  
// });