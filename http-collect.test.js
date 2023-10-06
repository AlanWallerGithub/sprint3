
process.argv[2] = "http://127.0.0.1:7070/";


 const http = require('http');

 let {httpCollect} = require('./http-collect')


describe("connection",()=>{

  //Antes de todo, creo un servidor para el test, igual que el que uso en mi archivo http-collect-webFalsa.js

  let server;

  beforeAll(  (done)=>{
    server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Stands out like a scratchy piece of piss grab us a digger. Stands out like a his blood's worth bottling no dramas she'll be right khe sanh. Mad as a yobbo how you little ripper blowie. You little ripper bazza flamin she'll be right show pony. Shazza got us some dob no dramas as cunning as a bogan. Trent from punchy cleanskin also you little ripper stonkered. He's got a massive quid when grab us a cut snake.`);
    });
  
    server.listen(7070, done);
  
  })

  afterAll((done)=>{
    server.close(done);
  })
 
    test('conecta al servidor y obtiene su data',    ()=>{

      return httpCollect(process.argv[2]).then(data=>{
        expect(data).toBe(`Stands out like a scratchy piece of piss grab us a digger. Stands out like a his blood's worth bottling no dramas she'll be right khe sanh. Mad as a yobbo how you little ripper blowie. You little ripper bazza flamin she'll be right show pony. Shazza got us some dob no dramas as cunning as a bogan. Trent from punchy cleanskin also you little ripper stonkered. He's got a massive quid when grab us a cut snake.`)
      })

      
    
    })

    
})






