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
const printPhrase = "Result is";

const result = add(num1, num2, printResult, printPhrase);
console.log(printPhrase + result);