"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let fs = require("node:fs/promises");
let finalList = [];
function makeItModular(dirName, fileName, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let list = yield fs.readdir(dirName);
            for (let i = 0; i < list.length; i++) {
                if (list[i].includes("." + fileName)) {
                    finalList.push(list[i]);
                }
            }
            callback(null, finalList);
            return finalList;
        }
        catch (err) {
            throw err;
        }
    });
}
module.exports = makeItModular;
