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

function add1(n1: number, n2: number): number {
    return n1 + n2
}

function logResult(num: number){
    console.log("Result is " + num);
}

//let combineValues1: Function;
let combineValues1: (a: number, b: number) => number;
combineValues1 = add1;
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
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
    userName = userInput;
}



