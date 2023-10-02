const url = require("url");
const http = require('http')


const server = http.createServer(function (req, res) {


  const urlObject = url.parse(req.url,true);
 

  if (req.method === 'GET' && urlObject.pathname === '/api/parsetime') {
    let fecha1 = new Date(urlObject.query.iso).toString();

  let object = {};
  if (fecha1.slice(16,18)[0] === "0"){

    object["hour"] = JSON.parse(fecha1.slice(17,18));
  }else{
    object["hour"] = JSON.parse(fecha1.slice(16,18));
  }

  if (fecha1.slice(19,21)[0] === "0"){

    object["minute"] = JSON.parse(fecha1.slice(20,21));
  }else{
    object["minute"] = JSON.parse(fecha1.slice(19,21));
  }
  
  if (fecha1.slice(22,24)[0] === "0"){

    object["second"] = JSON.parse(fecha1.slice(23,24));
  }else{
    object["second"] = JSON.parse(fecha1.slice(22,24));
  }
  

  

  
  let object2 = JSON.stringify(object)
  res.writeHead(200, { 'Content-Type': 'application/json' })  
  res.write(object2)
  
  }
  

  if (req.method === 'GET' && urlObject.pathname === '/api/unixtime') {

    let fecha2 = new Date(urlObject.query.iso).getTime();

    

      let object = JSON.stringify({"unixtime":JSON.parse(fecha2.toString())});
   

    res.writeHead(200, { 'Content-Type': 'application/json' }) 
    res.write(object)
    
  }

  res.end()

})
server.listen(process.argv[2])

