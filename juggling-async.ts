

const http = require('http');

const promiseGets = () =>{
    return new Promise ((resolve, reject)=>{
        http.get(process.argv[2],function callbackModulo1 (response){
            let finalData1 = "";
            response.on('data', function (data) { 
                finalData1 += data.toString('utf8');
                
             })
             response.on('error', function (error) {
                console.error(error);
             })
             response.on('end', function () {
                http.get(process.argv[3],function callbackModulo2 (response){
                    let finalData2 = "";
                    response.on('data', function (data) { 
                        finalData2 += data.toString('utf8');
                     })
                     response.on('error', function (error) {
                        console.error(error);
                     })
                     response.on('end', function () {
                        http.get(process.argv[4],function callbackModulo3 (response){
                            let finalData3 = "";
                            response.on('data', function (data) { 
                                finalData3 += data.toString('utf8');
                             })
                             response.on('error', function (error) {
                                console.error(error);
                             })
                             response.on('end', function () {
                                
                                console.log(finalData3)
                                let dataFinal = finalData1+" "+finalData2+" "+finalData3;
                                resolve(dataFinal)
                            })
                             
                             
                        })
                        console.log(finalData2)
                
                    })
                     
                     
                })
                console.log(finalData1)
                
                
            })
             
             
        })

    })

}



promiseGets();

module.exports = {promiseGets}




    
    
    





