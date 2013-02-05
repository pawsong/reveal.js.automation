# reveal.js auto deployment

This project intends to improve reveal.js edit and deploy experience.

## Prerequisites
- Node.js
- Grunt : `npm install -g grunt`

## Install
1. `git clone git://github.com/gifarangw/reveal.js.automation.git`
2. `cd reveal.js.automation`
3. `npm install`

## Commands
- `grunt` - will create `dist` directory and build presentation.
- `grunt dev` - will execute `grunt`, watch for file changes in `src` directory and reload presentation on the browser on each change
- `grunt deploy` - will deploy presentation to tomcat7 container
- `grunt undeploy` - will undeploy presentation from the container

## Workflow
### 1. Configure custom server information
Server configurations are  in `gradle.properties` file.

### 2. Edit slide content
Replace `src/main.html` with rvl.io 'export' output.

All the user's custom resources are to be placed in `src/resources` directory.
Files in `src/resources` directory will be placed under `resources` relative path on server.

For example, below html tag accesses `meny.png` in `resources` directory:

```html
<img width="320" height="299" src="resources/meny.png" alt="Meny">
```

## Reference
- [rvl.io](http://www.rvl.io/): Awesome reveal editor
- [reveal.js](https://github.com/hakimel/reveal.js/): Brilliant presentation framework
- [Gradle User Guide](http://www.gradle.org/docs/current/userguide/userguide_single.html): Magnificent build tool 
