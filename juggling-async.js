"use strict";
const http = require('http');
function callbackModulo1(response) {
    let finalData1 = "";
    response.on('data', function (data) {
        finalData1 += data.toString('utf8');
    });
    response.on('error', function (error) {
        console.error(error);
    });
    response.on('end', function () {
        http.get(process.argv[3], callbackModulo2);
        console.log(finalData1);
    });
}
function callbackModulo2(response) {
    let finalData2 = "";
    response.on('data', function (data) {
        finalData2 += data.toString('utf8');
    });
    response.on('error', function (error) {
        console.error(error);
    });
    response.on('end', function () {
        http.get(process.argv[4], callbackModulo3);
        console.log(finalData2);
    });
}
function callbackModulo3(response) {
    let finalData3 = "";
    response.on('data', function (data) {
        finalData3 += data.toString('utf8');
    });
    response.on('error', function (error) {
        console.error(error);
    });
    response.on('end', function () {
        console.log(finalData3);
    });
}
http.get(process.argv[2], callbackModulo1);
