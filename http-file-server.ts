

const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  
    const reader = fs.createReadStream(process.argv[3]);

      reader.on('data', function (chunk) {
        console.log(chunk.toString());
    });

    reader.pipe(res)


})

server.listen(process.argv[2])

let confirmacion = server.listening;

module.exports = {server,confirmacion} 
