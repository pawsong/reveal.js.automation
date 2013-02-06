// Build configurations.
module.exports = function (grunt) {
	var reloadPort = 8080;
	var serverPort = 3000;

	// project configuration
	grunt.initConfig({
		clean: {
			all: {
				src: ["dist"]
			},
			resources: {
				src: ["dist/resources"]
			}
		},
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
			tasks:['clean:resources', 'concat', 'copy:resources', 'reload']
		}
	});

	grunt.loadNpmTasks('grunt-reload');
	grunt.loadNpmTasks('grunt-contrib');
	
	var shell = require('shelljs');
	var isWin = !!process.platform.match(/^win/),
	isMac = !!process.platform.match(/^darwin/),
	isLinux = !!process.platform.match(/^linux/);
	
	// Gradle tasks : Deploy
	grunt.registerTask('deploy', "deploy", function() {
		if(isWin) shell.exec('gradlew deploy --stacktrace');
		else if(isMac || isLinux) { 
			shell.exec('./gradlew deploy --stacktrace');
		}
		else grunt.log.error("Deploy failed. Not supported OS.");
	});
	// Gradle tasks : Undeploy
	grunt.registerTask('undeploy', "undeploy", function() {
		if(isWin) shell.exec('gradlew undeploy --stacktrace');
		else if(isMac || isLinux) { 
			shell.exec('./gradlew undeploy --stacktrace');
		}
		else grunt.log.error("Undeploy failed. Not supported OS.");
	});
	
	grunt.registerTask('reload-noti', 'reload-noti', function() {
		grunt.log.subhead("Reload server successfully started! Connect the server at :\n     http://localhost:" + reloadPort);
	});
	
	// build index.html file.
	grunt.registerTask('default', ['clean:all', 'concat', 'copy']);
	grunt.registerTask('dev', ['default', 'server', 'reload', 'reload-noti', 'watch']);
}
