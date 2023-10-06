

process.argv[2] = './make-it-modular-archivos';
process.argv[3] = 'js';

//Deberían ser archivos "1.js" "3.js"

let {dataPromesa} = require('./make-it-modular');



test('Imprimir argumentos en lista',  async ()=>{


let dataPromesaResuelto = await dataPromesa;


expect(dataPromesaResuelto).toStrictEqual(["1.js","3.js"])



})




