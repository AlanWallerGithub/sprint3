"use strict";
const fs = require('fs');
let arrayNewlines = ((fs.readFileSync(process.argv[2])).toString()).split("\n");
console.log(arrayNewlines.length - 1);
module.exports = arrayNewlines;
