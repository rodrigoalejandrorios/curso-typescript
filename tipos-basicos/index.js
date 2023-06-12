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
//String
let myStringVar = "Rodrigo";
console.log(myStringVar);
//Number
let myNumberVar = 28;
console.log(myNumberVar);
//Boolean
let myBooleanVar = false;
console.log(myBooleanVar);
//Null
let myNullVar = null;
console.log(myNullVar);
//Undefined
let myUndefinedVar;
console.log(myUndefinedVar);
//--------------------
function myName(name) {
    return `Hola como estas ${name}`;
}
const myNameV2 = (name) => {
    return `Hola como estas ${name}`;
};
let myNameV3;
myNameV3 = (name) => {
    console.log(name);
};
const isName = myName(myStringVar);
const isName2 = myNameV2(myStringVar);
console.log(isName);
console.log(isName2);
myNameV3(myStringVar);
//2da parte
//Array
const names = [];
const namesV2 = [];
names.push('Rodrigo');
//Object o Records
const myObject = {
    name: "Rodri"
};
const myObjectV2 = {};
myObjectV2.name = 'Rodri';
myObjectV2.age = 28;
//Tuplas
const myObjectV3 = {};
myObjectV3.name = 'Rodri';
myObjectV3.age = 28;
//Promise
const myPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((res, _rej) => {
        setTimeout(() => {
            res('Hola mundo');
        }, 2000);
    });
});
myPromise().then((r) => console.log(r));
