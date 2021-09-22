// const person:  {
//     name: string;
//     age: number;
//     hobbies: string[];
//     tuples: [number, string];
// } = {
var person =  {
    name: "Sanjeev",
    age: 43,
    hobbies: ['Cricket', 'Football', 'Volleyball'],
    marks: [56, "Physics"]
}

let favActs: string[];
favActs = person.hobbies;

console.log(person);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}