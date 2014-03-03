var runnersAppCtrls = angular.module('runnersAppCtrls', []);

function navbarController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    $scope.isCollapsed = true;    
    
    $scope.menu = [
        {text: 'home', link : '/'},
        {text: 'locations', link : '/locations'},    
        {text: 'memories', link : '/memories'},
    ];

    $scope.collapse = function() {
    	$scope.isCollapsed = true;
    }    
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
			bodyText: 'Join us or post new meetings in Berlin. We are not competitive, with several levels and most of the time very flexible. Whether you like meeting new people, do some running with company, training for a race or just for fun, we are that kind of group. We also participate in some local races: Asics Race Berlin, Berlin Half Marathon... Remember "Running is a lot more fun in a group"',
			bodyList: [
				'Create your own event in Berlin',   
				'Decide the route, day and time and post it in the Facebook group',    
				'And…keep in mind a good place for drinks after!',   
			]
	    },  
	    {	      
			panelImgSrc: 'img/index/route2.png', 
			panelTitle: 'ROUTES', 	     
			bodyTitle: 'AM I NEAR BY ...',
			bodyText: 'We usually run in the difierent parks in Berlin. We alredy got a wide list of places to go but new routes are always welcome.',
			bodyList: [
				'Location',
				'Time',   
				'Distance',    
				'Running level',
				'Drinks after place',    
			]  
	    },
	    {	      
			panelImgSrc: 'img/index/sport2.png', 
			panelTitle: 'SPORT-RELATED', 	      
			bodyTitle: 'WHAT ELSE?',
			bodyText: 'In the Newsletter you will find next topics: Runners, training, races, health, fashion runners, womens, coffee places, shops for runners. And some breaking news about BSR!',      
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
		'img/memories/memories5.jpg',
		'img/memories/memories6.jpg',
		'img/memories/memories7.jpg',	
		'img/memories/memories8.jpg',	
		'img/memories/memories9.jpg',				
		'img/memories/memories11.jpg',				
		 ];	

	$scope.open = function (imgSrc) {
		var modalInstance = $modal.open({
	      templateUrl: 'myModalContent.html',
	      controller: ModalInstanceCtrl,	      
	      resolve: {
				imgSrc: function () {
				  return imgSrc;
				}
	      }
	    });
	}; 
});

var ModalInstanceCtrl = function ($scope, imgSrc) {		
  	$scope.imgSrc = imgSrc;
};

runnersAppCtrls.controller('locationsCtrl', function($scope) {
	$scope.message = 'What are the best locations to join the group? Please let us know about other locations we will point them in the map.';
	
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