$(document).ready(function() {
 	$('.carousel').carousel(); 	  
});

var panel   = $("#panel-group").html();
var template = Handlebars.compile(panel);
var data = { panels: [
	  {
	  	collapseNum: 'collapseOne',
	  	panelImgSrc: 'img/index/meeting2.png', 
	  	panelTitle: 'MEETINGS', 
	  	collapsed: '', 
	  	bodyTitle: 'OUR MEETINGS',
	  	bodyText: 'Join and post new meetings in your city. You could choose your favourite parks or routes, share with us!<br /><br />
          Our runs are always by time or distance. Almost all runs we can start and end together. We are not competitive, we have fast and slow runners. If you are looking for meeting new friends, keep them motivated to run and have company when training for a race, here we are!<br /><br />
          We also participate in some local races: Asics Race Berlin, Half Marathon…<br/>
          Always when we finish our training we grab a snack or coffee<br />
          Remember "Running is a lot more fun in a group":'
	  },  
	  {
	  	collapseNum: 'collapseTwo',
	  	panelImgSrc: 'img/index/route2.png', 
	  	panelTitle: 'ROUTES', 
	  	collapsed: 'in', 
	  	bodyTitle: 'AM I NEAR BY ...',
	  	bodyText: 'You could choose your best routes and share with the group. We usually run in the difierent parks in Berlin. You could surprise us with new routes and we surprise you with the best company.<br/>
          Discover new hills, new roads, new parks. All the routes are wellcome because if you run we run.<br />
          Define distances, places, logs, altitude, elevation and the ability to share routes!<br />'
	  },
	  {
	  	collapseNum: 'collapseThree',
	  	panelImgSrc: 'img/index/sport2.png', 
	  	panelTitle: 'SPORT-RELATED', 
	  	collapsed: '', 
	  	bodyTitle: 'WHAT ELSE?',
	  	bodyText: 'Join us and you will be discovering all the topics regarding runners in Berlin…and in the world: Runners, training, races, health, fashion runners, womens, coffee places, shops for runners. And important news about BSR!'
	  },
	]
};

$("#accordion").html(template(data));