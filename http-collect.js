"use strict";
const http = require('http');
const httpCollect = (port) => {
    return new Promise((resolve, reject) => {
        http.get(port, function (response) {
            let finalData = "";
            response.on('data', function (data) {
                finalData += data.toString('utf8');
            });
            response.on('end', function () {
                try {
                    // No hago nada aquí
                }
                catch (err) {
                    reject(new Error(err));
                }
                console.log(finalData.length);
                console.log(finalData);
                resolve(finalData);
            });
            response.on('error', reject);
        });
    });
};
httpCollect(process.argv[2]);
module.exports = { httpCollect };
