var express = require('express'),
    cp = require('child_process'),
    os = require('os'),
    fs = require('fs'),
    app = express(),
    port = process.env.PORT || 5001,
    urlRegex = /^\/(static|css|js)/i,
    cmd,
    grunt;

console.log('Starting server');

app.use('/static', express.static(__dirname + '/static'));
app.use('/css', express.static(__dirname + '/build/css'));
app.use('/js', express.static(__dirname + '/build/js'));
app.use('/hbs', express.static(__dirname + '/build/hbs'));

app.get('/', function (req, res) {
    fs.readFile(__dirname + '/build/html/index-min.html', {
        encoding: 'utf-8'
    }, function(err, data) {
        if (err) {
            console.log(err);
            res.send(500);
        }
        else {
            res.send(data);
        }
    });
});

console.log('Server listening on port ' + port);
app.listen(port);

// run Grunt watch.
cmd = (os.platform() === 'win32' ? 'grunt.cmd' : 'grunt');
grunt = cp.spawn(cmd, [
    '--force',
    'dev'
]);
grunt.stdout.on('data', function(data) {
    // relay output to console
    console.log("%s", data);
});