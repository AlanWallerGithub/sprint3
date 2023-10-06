

process.argv[2] = "3330";


let {server,confirmacion} = require('./time-server');

let {timeServerCliente} = require('./time-server-clienteFalso')


describe("connection",()=>{

    // Recreamos la hora actual del mismo modo que lo está haciendo el servidor 

    let date = new Date();

    let monthVar = (date.getMonth()+1).toString();
    let dateVar = (date.getDate()).toString();
    let hourVar = (date.getHours()).toString();
    let minuteVar = (date.getMinutes()).toString();
    
    if (monthVar.length < 2){
        monthVar = "0"+(date.getMonth()+1);
    }

    if (dateVar.length !== 2){
        dateVar = "0"+(date.getDate());
    }

    if (hourVar.length !== 2){
        hourVar = "0"+(date.getHours());
    }

    if (minuteVar.length !== 2){
        minuteVar = "0"+(date.getMinutes());
    }
    

    let horaFalsa = date.getFullYear()+"-"+monthVar+"-"+dateVar+" "+hourVar+":"+minuteVar+"\n";


    //Fin de la recreación

    beforeAll((done)=>{
        if (confirmacion === true){
            done()
        }
    })

    afterAll((done)=>{
        server.close(done);
      })
    

    test('Imprimir argumentos en lista',     ()=>{

        return timeServerCliente(process.argv[2]).then(data=>{
            expect(data).toBe(horaFalsa)
        })

    })



})