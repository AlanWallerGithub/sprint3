
process.argv[2] = "4000";

process.argv[3] = "./http-file-server-texto.txt";


 const http = require('http');
 

 let {server,confirmacion} = require('./http-file-server')

 //Simular cliente haciendo GET

 const clienteParaTest = port =>{
    return new Promise ((resolve, reject)=>{
        http.get(port,function (response){
            let finalData = "";
            response.on('data', function (data) { 
                finalData += data.toString('utf8');
             })
             response.on('end', function () {
                try {
                    // No hago nada aquí
                }catch(err){
                   reject(new Error (err)) 
                }
                resolve(finalData)
            })  
            response.on('error', reject)   
        })
})
}


describe("connection",()=>{

    beforeAll((done)=>{
        if (confirmacion === true){
            done()
        }
    })

    afterAll((done)=>{
        server.close(done);
      })
 
    test('conecta al servidor',  ()=>{

        return clienteParaTest("http://127.0.0.1:4000/").then(data=>{
            expect(data).toStrictEqual("Hola, esto es un texto")
          })
    })  
})






