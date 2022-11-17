//Load http module
const http = require("http");

const hostname = "127.0.0.1"
const port = 8000;

//create http server
const server = http.createServer(function (req, res) {
  // set the response http header with http status and context type
  res.writeHead(200, { "Content-Type": "text/plain"});
  // send the respose body
  res.end("Hello World\n");
})

// prints a log when the server starts listening
server.listen(port, hostname, function() {
  console.log(`server running at http://${hostname}:${port}`);
})
