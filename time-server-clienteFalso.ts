

const net = require('net');

const port = 3000;
 
const client = net.createConnection(port);

client.on('data',(data)=>{
  console.log(data.toString())
})