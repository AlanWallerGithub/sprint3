const fs = require('fs');

let finalList = [];

fs.readdir(process.argv[2],(err,list)=>{
    if (err) throw err;
    for(let i=0;i<list.length;i++){
        if (list[i].includes("."+process.argv[3])){
            finalList.push(list[i]);
        }
    }
    console.log(finalList.join("\n"));
})