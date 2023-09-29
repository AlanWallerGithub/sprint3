

function makeItModular(dirName,fileName,callback){
    const fs = require('fs');

    let finalList = [];
    
    fs.readdir(dirName,(err,list)=>{
        if (err) return callback(err);
        for(let i=0;i<list.length;i++){
            if (list[i].includes("."+fileName)){
                finalList.push(list[i]);
            }
        }
        
        callback(null, finalList)
        
    })
}

module.exports = makeItModular;