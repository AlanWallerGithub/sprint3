

let fs = require("node:fs/promises");

let finalList: string[] = [];

async function readdirFunc(){
    try{

        let list = await fs.readdir(process.argv[2])

        for(let i=0;i<list.length;i++){
                            if (list[i].includes("."+process.argv[3])){
                                finalList.push(list[i]);
                            }
                        }
                        
                         console.log(finalList.join("\n"));
                         return finalList;
    }catch(err){
        throw err;
    }
}



let arrayPromesa = readdirFunc()



module.exports = {arrayPromesa} 
    










