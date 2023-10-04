

let {mensaje} = require('./hello-world.js');

test('El mensaje debería ser imprimible por consola',  ()=>{


    const logSpy = jest.spyOn(global.console, 'log');

    logSpy(mensaje)
    
expect(logSpy).toHaveBeenCalledWith("HELLO WORLD")
     
    
    
})