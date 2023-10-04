"use strict";
const http = require('http');
function callbackModulo(response) {
    let finalData = "";
    response.on('data', function (data) {
        finalData += data.toString('utf8');
    });
    response.on('error', function (error) {
        console.error(error);
    });
    response.on('end', function () {
        console.log(finalData.length);
        console.log(finalData);
    });
}
http.get(process.argv[2], callbackModulo);
