

const http = require('http');
 
const hostname = '127.0.0.2';
const port = 8080;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Segundo mensaje`);
});
 
server.listen(port, hostname, () => {
  console.log(`Web falsa es http://${hostname}:${port}/`);
});