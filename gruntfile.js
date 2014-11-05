module.exports = function(grunt) {		
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-ngmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		ngmin: {
			controllers: {
    				src: [
    					'js/app.js', 
    					'js/controllers.js'
    					],
				    dest: 'js/all.min.js'
			},												
		},		
		concat: {
	        options: {
	            separator: grunt.util.linefeed + ';' + grunt.util.linefeed,	            
	        },
	        dist: {
	            src: [	            	
	            	'bower_components/angular/angular.min.js',
	                'bower_components/angular-route/angular-route.min.js',	                	                
	                'bower_components/angular-google-maps/dist/angular-google-maps.min.js',	                
	                'bower_components/lodash/dist/lodash.min.js',
	                'js/all.min.js',	                
	            ],
	            dest: 'js/main.min.js',
	        },        
	    },
	    copy: {
			main: {			    
			    expand: true,
			    cwd: 'bower_components/bootstrap/dist/fonts/',
			    src: '**',
			    dest: 'fonts/',			    
			    filter: 'isFile'
		  	},
	    },
	    cssmin: {	    	
	    	minify: {	    			
				    src: 'css/style.css',
				    dest: 'css/style.min.css',				    
			},			
		},
		watch: {
			scripts: {
				files: ['js/app.js', 'js/controllers.js'],
				tasks: ['ngmin', 'concat'],				
			},
			css: {
				files: 'css/style.css',
				tasks: ['cssmin'],				
			}
		},
	});	

	grunt.registerTask('default',['ngmin', 'concat', 'copy', 'cssmin']);
};