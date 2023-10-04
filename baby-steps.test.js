
   





    process.argv[2] = '3';
    process.argv[3] = '4';
    process.argv[4] = '1';

//La suma es 8

const suma = require('./baby-steps.js');

test('Suma los argumentos',()=>{

    expect(suma).toBe(8)
})



    
