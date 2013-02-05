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
- `grunt dev` - will watch for file changes in `src` directory and reload on the browser
- `grunt deploy` - will deploy presentation to tomcat7 container
- `grunt undeploy` - will undeploy presentation from the container

## Workflow
### 1. Configure custom server information
Server configurations are  in `gradle.properties` file.

### 2. Edit slide content
Replace `src/main.html` with rvl.io 'export' output.

## Reference
- [rvl.io](http://www.rvl.io/): Awesome reveal editor
- [reveal.js](https://github.com/hakimel/reveal.js/): Brilliant presentation framework
- [Gradle User Guide](http://www.gradle.org/docs/current/userguide/userguide_single.html): Magnificent build tool 
