# reveal.js auto deployment

The only things you should change are
- tomcat site url: in gradle.properties
- tomcat port: in gradle.properties
- contents of your presentation given by rvl.io 'export' button: in main.html

Commands :

- grunt deploy : Deploy to remote server
- grunt undeploy : Undeploy from remote server
- grunt dev : Start presentation on local server.
This will automatically reload changes.

For further information, refer to :
- [rvl.io](http://www.rvl.io/): Awesome reveal editor
- [reveal.js](https://github.com/hakimel/reveal.js/): Brilliant presentation framework
- [Gradle User Guide](http://www.gradle.org/docs/current/userguide/userguide_single.html): Magnificent build tool 
