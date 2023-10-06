

const { Transform } = require('stream');
const http = require('http')


const server = http.createServer(function (req, res) {

    if (req.method === 'POST') {
 
        const uppercase = new Transform({
            transform(chunk, encoding, callback) {
              callback(null, chunk.toString().toUpperCase());
            },
          });

        req.pipe(uppercase).pipe(res)

        console.log()

       
    }

    

})
server.listen(process.argv[2])


let confirmacion = server.listening;

module.exports = {server,confirmacion} 

