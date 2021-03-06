enum Role {DAD, MON, KID};

type Combinable = number|string;

const person:  {
    name: string;
    age: number;
    hobbies: string[];
    marks: [number, string];
    role: Role,
    resultConversion: 'as-number' | 'as-text'
} = {
// var person =  {
    name: "Sanjeev",
    age: 43,
    hobbies: ['Cricket', 'Football', 'Volleyball'],
    marks: [56, "Physics"],
    role: Role.DAD,
    resultConversion: 'as-number'
}

let favActs: string[];
favActs = person.hobbies;

let anyArr: any[];
anyArr = [5, person, 10, "Sanjeev"];

console.log(person);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

function combine(input1: Combinable, input2: Combinable){
    if(typeof input1 === 'number' && typeof input2 === 'number' ){
        return input1 + input2;
    }else{
        return input1.toString() + input2.toString();
    }
}

console.log(combine(1, 2));
console.log(combine(1, "Sanjeev"));
console.log(combine( "Sanjeev", 324));