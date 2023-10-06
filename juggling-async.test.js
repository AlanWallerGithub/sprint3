
process.argv[2] = "http://127.0.0.1:6060/";
process.argv[3] = "http://127.0.0.1:5050/";
process.argv[4] = "http://127.0.0.1:4040/";


 const http = require('http');
 


 let {promiseGets} = require("./juggling-async")


describe("connection",()=>{

    let server1;
    let server2;
    let server3;

    beforeAll((done)=>{
        
        server1 = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Primer mensaje');
          });
        
          server1.listen(6060);

          server2 = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Segundo mensaje');
          });
        
          server2.listen(5050);

          server3 = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Tercer mensaje');
          });
        
          server3.listen(4040, done);

        
        
    })

    afterAll((done)=>{
        server1.close();
        server2.close();
        server3.close(done);
      
      })
 
    test('recibir datos async',   ()=>{

        return promiseGets().then(data =>{

            expect(data).toStrictEqual("Primer mensaje Segundo mensaje Tercer mensaje")
        })
    
    })  

  
})






