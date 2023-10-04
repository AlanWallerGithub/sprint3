
process.argv[2] = "http://127.0.0.1:8080/";


 const http = require('http');

 let {httpGet} = require('./http-client')


describe("connection",()=>{

  //Antes de todo, creo un servidor para el test, igual que el que uso en mi archivo http-client-webFalsa.js

  let server;

  beforeAll(  (done)=>{
    server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World');
    });
  
    server.listen(8080, done);
  
  })

  afterAll((done)=>{
    server.close(done);
  })
 
    test('conecta al servidor y obtiene su data',    ()=>{

      return httpGet(process.argv[2]).then(data=>{
        expect(data).toBe("Hello World")
      })

      
    
    })

    
})






