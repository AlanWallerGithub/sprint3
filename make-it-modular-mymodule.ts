let fs = require("node:fs/promises");

    let finalList: string[] = [];

async function makeItModular(dirName,fileName,callback){
    

    try{
        let list = await fs.readdir(dirName);

        
        for(let i=0;i<list.length;i++){
            if (list[i].includes("."+fileName)){
                finalList.push(list[i]);
            }
        }
        
        callback(null, finalList)
        return finalList;
    }catch(err){
        throw err;

    }
    
}

module.exports = makeItModular;