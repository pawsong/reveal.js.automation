// Build configurations.
module.exports = function (grunt) {
	var reloadPort = 8080;
	var serverPort = 3000;

	// project configuration
	grunt.initConfig({
		// Build index.html
		concat: {
		    dist: {
				src: ['boilerplate/html/head.html', 'src/main.html', 'boilerplate/html/tail.html'],
				dest: 'dist/index.html'
			}
		},
		
		// Make dist directory with boilerplate files and custom resources
		copy: {
			boilerplate: {
				files: [
					{src: ['boilerplate/**'], dest: 'dist/'},
				]
			},
			resources: {
				files: [
					{src: ['src/resources/**'], dest: 'dist/resources/'},
				]
			}
		},
		
		// Run static server
		server: {
			port: serverPort,
			base: './dist'
		},
		
		// Live reloading
		reload: {
			port: reloadPort,
			proxy: {
				host: 'localhost',
				port: serverPort
			}
		},
		watch:{
			files:['./src/**'],
			tasks:['concat', 'copy:resources', 'reload']
		}
	});

	grunt.loadNpmTasks('grunt-reload');
	grunt.loadNpmTasks('grunt-contrib');
	
	var shell = require('shelljs');
	
	// Gradle tasks : Deploy
	grunt.registerTask('deploy', "deploy", function() {
	  shell.exec('gradlew deploy');
	});
	// Gradle tasks : Undeploy
	grunt.registerTask('undeploy', "undeploy", function() {
	  shell.exec('gradlew undeploy');
	});
	
	grunt.registerTask('reload-noti', 'reload-noti', function() {
		grunt.log.subhead("Reload server successfully started! Connect the server at :\n     http://localhost:" + reloadPort);
	});
	
	// build index.html file.
	grunt.registerTask('default', ['concat', 'copy']);
	grunt.registerTask('dev', ['default', 'server', 'reload', 'reload-noti', 'watch']);
}