var http = require('http');
//create a server object:

var port = process.env.PORT || 3000;


http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(port); //the server object listens on port 8080



// app.set('port', port);


// Console will print the message
// console.log('Server running at 5000');
