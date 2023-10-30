// Create web server
app.use(express.static(__dirname + '/public'));

// Path: comments.js
// Create server
var server = app.listen(8080, function () {
    var port = server.address().port;
    console.log('Server running at http://localhost:%s', port);
});