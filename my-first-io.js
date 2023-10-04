"use strict";
const fs = require('fs');
//Con 'import' no funciona el learnyounode
let arrayNewlines = ((fs.readFileSync(process.argv[2])).toString()).split("\n");
console.log(arrayNewlines.length - 1);
