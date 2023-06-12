//String
let myStringVar: string = "Rodrigo";
console.log(myStringVar);

//Number
let myNumberVar: number = 28;
console.log(myNumberVar);

//Boolean
let myBooleanVar: boolean = false;
console.log(myBooleanVar);

//Null
let myNullVar: null = null;
console.log(myNullVar);

//Undefined
let myUndefinedVar: undefined;
console.log(myUndefinedVar);

//--------------------

function myName(name: string): string {
  return `Hola como estas ${name}`;
}

const myNameV2 = (name: string): string => {
  return `Hola como estas ${name}`;
};

let myNameV3: (name: string) => void;

myNameV3 = (name) => {
    console.log(name)
};

const isName = myName(myStringVar)
const isName2 = myNameV2(myStringVar)
console.log(isName)
console.log(isName2)
myNameV3(myStringVar)

//2da parte
//Array
const names: string[] = []
const namesV2: Array<string> = []
names.push('Rodrigo')

//Object o Records
const myObject: Object = {
  name:"Rodri"
}

const myObjectV2 : Record<string, any> = {}
myObjectV2.name = 'Rodri'
myObjectV2.age = 28

//Tuplas
const myObjectV3 : Record<string, string | number> = {}
myObjectV3.name = 'Rodri'
myObjectV3.age = 28

//Promise

const myPromise = async (): Promise<string> => {
  return await new Promise((res, _rej)=>{
    setTimeout(()=>{
      res('Hola mundo')
    },2000)
  })
}

myPromise().then((r)=> console.log(r))
