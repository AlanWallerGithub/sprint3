"use strict";
const http = require('http');
const hostname = '127.0.0.1';
const port = 6060;
const server1 = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Primer mensaje`);
});
server1.listen(port, hostname, () => {
    console.log(`Web falsa es http://${hostname}:${port}/`);
});
