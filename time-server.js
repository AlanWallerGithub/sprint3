const net = require('net')
const server = net.createServer(function (socket) {
    let date = new Date();

    let data = date.getFullYear()+"-"+"0"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+"\n";

    socket.write(data)
    socket.end()

    
    

})
server.listen(process.argv[2])
