const url = require("url");
const http = require('http')


const server = http.createServer(function (req, res) {


  const urlObject = url.parse(req.url,true);
 

  if (req.method === 'GET' && urlObject.pathname === '/api/parsetime') {

    let fecha1 = new Date(urlObject.query.iso).toString();

  let object = {};
  object["hour"] = JSON.parse(fecha1.slice(16,18));
  object["minute"] = JSON.parse(fecha1.slice(19,21));
  object["second"] = JSON.parse(fecha1.slice(22,24));

  
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

