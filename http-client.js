const http = require('http');

function callbackModulo (response){
    response.on('data', function (data) { 
        console.log(data.toString('utf8'));
     })
     response.on('error', function (error) {
     })
     
}

http.get(process.argv[2],callbackModulo)
