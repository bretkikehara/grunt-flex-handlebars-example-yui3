
# grunt-flex-handlebars-example-yui3

This repository hold the example code to implement the grunt-flex-handlebars plugin using a Grunt file.

### Install the example

Please run these commands on the terminal:

	git clone https://github.com/bretkikehara/grunt-flex-handlebars-example-yui3.git
	npm install -g grunt-cli
	npm install .

### Run the server

Currently the server will listen on port 5001 and will automatically compile any handlebars templates. Run this code to get started:

	node server.js


The console should look something like this:

	Starting server
	Server listening on port 5001
	Running "jshint:all" (jshint) task

	>> 3 files lint free.



	Running "uglify:min_target" (uglify) task

	File "build/js/planner-model-min.js" created.

	Running "cssmin:minify" (cssmin) task

	Running "htmlmin:dist" (htmlmin) task
	File build/html/index-min.html created.


	Running "handlebars:compile" (handlebars) task
	File "build/hbs/handlebars-template.js" created.

	Running "watch" task
	Waiting...