

process.argv[2] = './my-first-async-io-textoPrueba.txt';


let {archivoPromesa} = require('./my-first-async-io');


test('Imprimir argumentos en lista',  async ()=>{


    let archivoResuelto = await archivoPromesa;

    
    expect(archivoResuelto.split("\n").length -1).toStrictEqual(3)


})




