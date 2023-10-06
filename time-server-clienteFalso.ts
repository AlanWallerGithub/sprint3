

const net = require('net');

const portEjemplo = 3330;

  const timeServerCliente = port =>{
    return new Promise ((resolve, reject)=>{

      
 
      const client = net.createConnection(port);

      let finalData = "";
      
      client.on('data',(data)=>{
        console.log(data.toString())
        finalData += data.toString('utf8');
      })
    
      client.on('end',()=>{
    
        resolve(finalData)
      })

    })
}

timeServerCliente(portEjemplo)

module.exports = {timeServerCliente}