
process.argv[2] = "5500";


 const http = require('http');
 

 let {server,confirmacion} = require('./http-uppercaserer')


describe("connection",()=>{

    beforeAll((done)=>{
        if (confirmacion === true){
            console.log("esto es un server "+confirmacion)
            done()
        }
    })

    afterAll((done)=>{
        server.close(done);
      })
 
    test('recibir el POST request',   ()=>{

        

return fetch(`http://127.0.0.1:5500/`,{
    method:'POST',
    headers:{
      'Content-Type': 'text/html; charset=UTF-8'
    },
    body: JSON.stringify({
      saludo1:"hola",
      saludo2:"esto estaba antes en minúscula",
      saludo3:"esto también",
      saludo4:"pero ahora en mayúscula"
    }),
  
  }).then(res => {
      return res.json()
  })
  .then(data => {

    expect(data).toEqual({"SALUDO1": "HOLA", "SALUDO2": "ESTO ESTABA ANTES EN MINÚSCULA", "SALUDO3": "ESTO TAMBIÉN", "SALUDO4": "PERO AHORA EN MAYÚSCULA"})
  })
    
    })  

  
})






