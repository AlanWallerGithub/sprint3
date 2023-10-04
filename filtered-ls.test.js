

    process.argv[2] = './filtered-ls-archivos';
    process.argv[3] = 'js';

//Deberían ser archivos "1.js" "3.js"

let {arrayPromesa} = require('./filtered-ls.js');




test('Imprimir argumentos en lista',  async ()=>{


    let arrayResuelto = await arrayPromesa;

    
 expect(arrayResuelto).toStrictEqual(["1.js","3.js"])
    

     
    
    
    

    
    
})




