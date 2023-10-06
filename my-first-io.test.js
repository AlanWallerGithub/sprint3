

process.argv[2] = './my-first-io-textoPrueba.txt';


let arrayNewlines = require('./my-first-io');


test('Imprimir argumentos en lista',  ()=>{

    
    expect(arrayNewlines.length -1).toStrictEqual(3)


})




