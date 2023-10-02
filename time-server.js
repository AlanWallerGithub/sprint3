const net = require('net')
const server = net.createServer(function (socket) {
    let date = new Date();

    let monthVar = date.getMonth()+1;
    let dateVar = date.getDate();
    
    if (monthVar.length < 2){
        monthVar = "0"+(date.getMonth()+1);
    }

    if (dateVar.length !== 2){
        dateVar = "0"+(date.getDate());
    }
    

    let data = date.getFullYear()+"-"+monthVar+"-"+dateVar+" "+date.getHours()+":"+date.getMinutes()+"\n";

    socket.write(data)
    socket.end()

    
    

})
server.listen(process.argv[2])
