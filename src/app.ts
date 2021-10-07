function add(n1: number, n2: number, showResult: boolean, phrase: string){
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect input');
    // }
    if(showResult){
        console.log(phrase + n1 + n2);
    }else{
        return n1 + n2;
    }
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;
const printPhrase = "Result is ";

const result = add(num1, num2, printResult, printPhrase);
console.log(printPhrase + result);

function add6(n1: number, n2: number): number {
    return n1 + n2
}

function logResult(num: number){
    console.log("Result is " + num);
}

//let combineValues1: Function;
let combineValues1: (a: number, b: number) => number;
combineValues1 = add6;
console.log(combineValues1(8,8));
// combineValues1 = logResult;
// console.log(combineValues1(8));

function addAndHandle(a: number, b: number, cb: (num: number) => number){
    const result = a + b;
    cb(result);
}


addAndHandle(10, 20, (result: number) => {
    console.log("Result in cb is " + result)
    return 0;
});


// let userInput: unknown; wont work
// let userInput: any;
let userInput: unknown;
let uName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
    uName = userInput;
    console.log("It is a string.");
}

let fnError: never;
 
function generateError(message: string, code: number): never {
    throw{message: message, errorCode: code};
    // while(true) {} - never returns;
}



// Code goes here!
const userName = " Sanjeev";
// username = "Rao";
// let age = 30;
// age = 29;

//var result;
function add7(a: number, b: number){
    var result = a + b;
    return result;
}
//console.log(result);


const add1 = (a: number, b: number) => {
    return a + b;
}

const add2 = (a: number, b: number) => a+b;


const add3 = (output : string | number) => console.log(output);

//const add4 = output => console.log(output);

const add5: (a: number | string) => void = output => console.log(output);

console.log("Result is ");
add5(add1(5,2));


const btn = document.querySelector('button');
if(btn){
    btn.addEventListener('click', event => {console.log(event)});
}

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const Person = {
    fname : 'Sanjeev',
    age : 43
};

const copiedPerson = {...Person};

console.log(copiedPerson)

const add8 = (...values: number[]) => {

    let result = 0;
    return values.reduce((curResult, curValue)=>{
        return curResult + curValue;
    }, 0);

}

console.log(add8(1,2,3,4,5,6,7,8,9));

const [hob1, hob2, ...remaininghobs] = hobbies;

console.log(hobbies, hob1, hob2);

const {fname: realName, age} = Person;

console.log(realName, age, Person);

generateError('An error occured in the file', 500);


