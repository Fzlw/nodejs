const http = require('http');
//  const hostname = '0.0.0.0';
 const port = 3389;
 const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n Welcome to nodejs liwei');
 });
 server.listen(port);