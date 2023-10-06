

let fs = require("node:fs/promises");


async function firstAsyncIo(){

        try{
            let data = await fs.readFile((process.argv[2]),'utf-8')
            
            console.log(data.split("\n").length -1);
            
            return data;
        }catch(err){
            throw err;
        }

}

let archivoPromesa = firstAsyncIo()


module.exports = {archivoPromesa}