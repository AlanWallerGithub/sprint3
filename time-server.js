"use strict";
const net = require('net');
const server = net.createServer(function (socket) {
    let date = new Date();
    let monthVar = (date.getMonth() + 1).toString();
    let dateVar = (date.getDate()).toString();
    let hourVar = (date.getHours()).toString();
    let minuteVar = (date.getMinutes()).toString();
    if (monthVar.length < 2) {
        monthVar = "0" + (date.getMonth() + 1);
    }
    if (dateVar.length !== 2) {
        dateVar = "0" + (date.getDate());
    }
    if (hourVar.length !== 2) {
        hourVar = "0" + (date.getHours());
    }
    if (minuteVar.length !== 2) {
        minuteVar = "0" + (date.getMinutes());
    }
    let data = date.getFullYear() + "-" + monthVar + "-" + dateVar + " " + hourVar + ":" + minuteVar + "\n";
    socket.write(data);
    socket.end();
});
server.listen(process.argv[2]);
