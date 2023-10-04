"use strict";
const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Stands out like a scratchy piece of piss grab us a digger. Stands out like a his blood's worth bottling no dramas she'll be right khe sanh. Mad as a yobbo how you little ripper blowie. You little ripper bazza flamin she'll be right show pony. Shazza got us some dob no dramas as cunning as a bogan. Trent from punchy cleanskin also you little ripper stonkered. He's got a massive quid when grab us a cut snake.`);
});
server.listen(port, hostname, () => {
    console.log(`Web falsa es http://${hostname}:${port}/`);
});
