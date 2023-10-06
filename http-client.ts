

const http = require('http');

const httpGet = (port: String) =>{
    return new Promise ((resolve, reject)=>{
        http.get(port,function(res){
            let bodyFinal = "";
            res.on('data',function(d){
                console.log(d.toString('utf8'))
                bodyFinal = d.toString('utf8')   
            })
            res.on('end',function(){
                try {
                    // No hago nada aquí

                }catch(err){

                   reject(new Error (err)) 
                }
                resolve(bodyFinal)
            })
            res.on('error',reject)
        })
     })
}



httpGet(process.argv[2])


module.exports = {httpGet} 