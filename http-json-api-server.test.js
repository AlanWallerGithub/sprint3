
process.argv[2] = "5000";


 const http = require('http');
 

 let {server,confirmacion} = require('./http-json-api-server')

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
            console.log("esto es un server "+confirmacion)
            done()
        }
    })

    afterAll((done)=>{
        server.close(done);
      })
 
    test('endpoint 1',  ()=>{

        return clienteParaTest("http://127.0.0.1:5000/api/parsetime?iso=2013-08-10T12:10:15.474Z").then(data=>{
            expect(JSON.parse(data)).toStrictEqual({"hour": 14, "minute": 10, "second": 15})
          })
    })  

    test('endpoint 2',  ()=>{

        return clienteParaTest("http://127.0.0.1:5000/api/unixtime?iso=2013-08-10T12:10:15.474Z").then(data=>{
            expect(JSON.parse(data)).toStrictEqual({"unixtime":1376136615474})
          })
    })  
})






