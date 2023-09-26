const makeItModular = require('./mymodule.js');

function callbackModulo(err, data){
    if (err === null){
        console.log(data.join("\n"));
        
    }else{
        return console.log("Ha habido un error");
    }
}

makeItModular(process.argv[2],process.argv[3],callbackModulo);