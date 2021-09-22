enum Role {DAD, MON, KID};
const person:  {
    name: string;
    age: number;
    hobbies: string[];
    marks: [number, string];
    role: Role
} = {
// var person =  {
    name: "Sanjeev",
    age: 43,
    hobbies: ['Cricket', 'Football', 'Volleyball'],
    marks: [56, "Physics"],
    role: Role.DAD
}

let favActs: string[];
favActs = person.hobbies;

console.log(person);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}