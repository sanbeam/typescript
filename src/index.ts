import * as utils from "./utils";

let isPresent: boolean = false;
let magic: number = 66.7;
let hello: string = "world";

let notDefined: undefined = undefined;
let notPresent: null = null;

//let penta: symbol = Symbol("star");
//let biggy: bigint = 24n;

class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let q: Queue<Number> = new Queue();
q.push(1);
q.push(11);
q.push(111);
q.push(1111);
q.push(11111);
q.push(111111);
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());

let numarr1: number[] = [1, 2, 3];
let numarr2: number[] = [1, 2, 3, 4, 5];

console.log(numarr1);

let tuple: [number, number];
tuple = [1, 4];

console.log(tuple);

type Point = { x: number; y: number; z: number };

let point1: Point = {
  x: 0,
  y: 0,
  z: 0,
};

let point2: Point = {
  x: 1,
  y: 1,
  z: 1,
};

console.log(point1);
console.log(point2);

const point3: Point = { x: 3, y: 3, z: 3 };
console.log(point3);

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(4, 5));

function sum(...values: number[]): number {
  return values.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

type Add = (a: number, b: number) => number;

let add1: Add;

add1 = function (a: number, b: number): number {
  return a + b;
};

console.log(add(5, 6));

//Duck typing
type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2d = { x: 4, y: 5 };
let point3d = { x: 6, y: 7, z: 10 };

console.log(point2d);
point2d = point3d;
console.log(point2d);
function takes2D(point: Point2D) {
  console.log(point);
}
takes2D(point3d);

//point3d = point2d;
point2d = { x: 4, y: 5 };
console.log(point3d);
function takes3D(point: Point3D) {
  console.log(point);
}
takes2D(point2d);

class Milk {
  #percent: number;
  #name: string;

  constructor(percent: number, name: string) {
    this.#percent = percent;
    this.#name = name;
  }

  makeOneGlassWarm(quantity: number): string {
    console.log(
      `Creating %s glass(es) of %s  %d% milk`,
      quantity,
      this.#name,
      this.#percent
    );
    return `Making ${quantity} glass(es) of ${this.#name}  ${
      this.#percent
    }% milk`;
  }
}

let milk1: Milk = new Milk(10.5, "lowfat");
console.log(milk1.makeOneGlassWarm(10));
let milk2: Milk = new Milk(100, "lowfat");
console.log(milk2.makeOneGlassWarm(20));

let anyVar: any;
let unkVar: unknown;

anyVar = 123;
anyVar = "Sanjeev";

unkVar = 123;
unkVar = "Sanjeev";

let bvar: boolean = anyVar;
//bvar = unkVar;

let crazystr = "1337";
let crazynum = +crazystr;

console.log(crazynum);

console.log(typeof crazynum);

console.log(utils.isPalindrome("malayalam"));

console.log(process.env.USERNAME);

import fs from "fs";
fs.writeFileSync("hello.txt", "Hi My Name is Sanjeev");

class Person {
  private __age: number;

  constructor(age: number) {
    this.__age = age;
  }
  age(): number {
    return this.__age;
  }

  growOld = () => {
    this.__age++;
    console.log("Age ++");
  };
}

const person: Person = new Person(5);
const growOld = person.growOld;
//setTimeout(person.growOld, 10);
growOld();
//setTimeout(() => console.log("Person Age is " + person.age()), 30);

type RoPoint = { readonly x: number; readonly y: number; z: number };
let point: RoPoint = { x: 0, y: 0, z: 1 };
console.log(point);
//point.x = 5;
point.z = 10;
console.log(point);

class Person1 {
  private readonly __age: number;
  public age: number;

  constructor(age: number) {
    this.__age = age;
    this.age = age;
  }
  getAge(): number {
    return this.__age;
  }

  growOld = () => {
    this.age++;
    console.log("Age ++");
  };
}

type CardinalDirection = "North" | "East" | "West" | "South";

let direction: CardinalDirection = "East";

direction = "South";
//direction = "N0rth";

//typed unions

function formatCommandLine(input: string | string[]) {
  let line = "";

  if (typeof input == "string") {
    line = input.trim();
  } else {
    line = input.map((x) => x.trim()).join(" ");
  }
  console.log(line);
}

formatCommandLine("And ");

formatCommandLine(["a", "b", "v"]);

type PaddingFormat = number | string;

function paddingLeft(value: string, padding: PaddingFormat) {
  if (typeof padding == "number") {
    return Array(padding).join(" ") + value;
  }
  if (typeof padding == "string") {
    return padding + value;
  }
  throw new Error("Invalid padding format error");
}

console.log(paddingLeft("Hello", "---"));
console.log(paddingLeft("Hello", "***"));
console.log(paddingLeft("Hello", 4));

//console.log(paddingLeft("Hello", false));

class Cat {
  meow() {
    console.log("meow");
  }
}

class Dog {
  bark() {
    console.log("bark");
  }
}

type Animal = Cat | Dog;
function speak(animal: Animal) {
  if (animal instanceof Cat) {
    animal.meow();
  }
  if (animal instanceof Dog) {
    animal.bark();
  }
}

let animal: Animal = new Dog();
speak(animal);

type Square = {
  side: number;
  kind: "square";
};
type Rectangle = {
  l: number;
  b: number;
  kind: "rectangle";
};

type Shape = Square | Rectangle;

function area(shape: Shape) {
  if ("side" in shape) {
    console.log(shape.side * shape.side);
  }
  if ("l" in shape && "b" in shape) {
    console.log(shape.l * shape.b);
  }

  if (shape.kind === "square") {
    console.log(shape.side * shape.side);
  }
  if (shape.kind === "rectangle") {
    console.log(shape.l * shape.b);
  }
}

area({ side: 10, kind: "square" });
area({ l: 10, b: 20, kind: "rectangle" });

class InlinePerson {
  constructor(public name: string, public age: number) {}
}

type IPoint2D = { x: number; y: number };
type IPoint3D = IPoint2D & { z: number };

type IPerson = {
  name: string;
};

type IPhone = {
  name: string;
};
type IAddress = {
  name: string;
};

type Contact = IPerson & IAddress & IPhone;

type IPerson2 = {
  name: string;
  age: number;
  optional?: string;
};

interface Point4D {
  x: number;
  y: number;
  z: number;
  w: number;
}

interface Point5D extends Point4D {
  r: number;
}
export const point11: Point5D = {
  x: 0,
  y: 0,
  z: 0,
  w: 0,
  r: 0,
};

console.log(point11);

//never

const funcNever = (message: string) => {
  throw new Error(message);
};

function area51(shape: Shape) {
  if (shape.kind === "square") {
    return;
  } else if (shape.kind === "rectangle") {
    return;
  }
  const ensureAllCasesHandled: never = shape;
}

//definitive assignment

let dice!: number;

function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
}

rollDice();
console.log(dice);

class Assertion {
  x!: number;
  y!: number;

  constructor() {
    this.init();
    console.log(this.x + " " + this.y);
  }

  init() {
    this.x = Math.random();
    this.y = Math.random();
  }
}

let ass = new Assertion();

//User defined type guards
type Square1 = {
  side: number;
};
type Rectangle1 = {
  l: number;
  b: number;
};

type Shape1 = Square1 | Rectangle1;

function isSquare(shape: Shape1): shape is Square1 {
  return "side" in shape;
}

function isRectangle(shape: Shape1): shape is Rectangle1 {
  return "l" in shape;
}

function area1(shape: Shape1) {
  if (isSquare(shape)) {
    console.log(shape.side * shape.side);
    return shape.side * shape.side;
  }
  if (isRectangle(shape)) {
    console.log(shape.l * shape.b);
    return shape.l * shape.b;
  }
  const _ensure: never = shape;
  return _ensure;
}

area1({ side: 10 });
area1({ l: 10, b: 20 });

//assert

type Person11 = {
  name: string;
  dob?: String;
};

function loadPerson(): Person11 | null {
  return { name: "Sanjeev", dob: "13Jan" };
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

const maybePerson = loadPerson();

assert(maybePerson != null, "Could not load person");
console.log(maybePerson.name);

function reverse(str: string): string;
function reverse(str: string[]): string[];
function reverse(param: string | string[]) {
  if (typeof param == "string") {
    return param.split("").reverse().join("");
  } else {
    return param.slice().reverse();
  }
}

let hello1 = ["hello", "world"];
console.log(reverse(hello1));
let hello2 = "hello";
console.log(reverse(hello2));

type Add12 = (a: number, b: number) => number;
type Add1 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  debugStr?: string;
};

let add2: Add1 = (a: number, b: number, c?: number) => {
  console.log(a + b + (c == null ? 0 : c));
  return a + b + (c == null ? 0 : c);
};

add2(1, 3);
add2(1, 3, 5);

type PointCreator = new (x: number, y: number) => { x: number; y: number };

type PointCreator2 = {
  new (x: number, y: number): { x: number; y: number };
};

const pt4: PointCreator = class {
  constructor(public x: number, public y: number) {}
};

abstract class Command {
  abstract commandLine(): string;

  execute() {
    console.log("Executing " + this.commandLine());
  }
}

class GitFetchCommand extends Command {
  commandLine() {
    return "git fetch --all";
  }
}

let fetch: Command = new GitFetchCommand();
fetch.execute();

const strs = {
  hello: "world",
};
console.log(strs["hello"]);

const nums = {
  1337: "world1",
};
console.log(nums[1337]);

type Dictionary = {
  [key: string]: boolean | undefined;
};
let dict: Dictionary = {
  a: false,
  b: false,
  c: true,
};

console.log(dict);

delete dict["a"];

console.log(dict);

console.log(dict["b"]);

type Person8 = {
  name: string;
  email?: string;
};
type PersonDictionary = {
  [name: string]: Person8 | undefined;
};

const persons: PersonDictionary = {
  sanjeev: { name: "Sanjeev BA" },
  suchi: { name: "Suchitra Sanjeev", email: "sanjeevsuchianna@gmail.com" },
  anna: { name: "Annapoorni Sanjeev" },
  vaishu: { name: "Vaishnavi Sanjeev", email: "vaishnavisanjeev05@gmail.com" },
  pinky: { name: "Pinky Sanjeev" },
};

console.log(persons["pinky"]);

const result = persons["pinky"];
console.log(result?.email);

function reversed(nums: number[]): number[] {
  return nums
    .slice()
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
}

const start = [1, 3, 45, 9, 8, 92];
const result1 = reversed(start);
console.log(result1);
console.log(start);

//tuple readonel

type Point9 = [x: number, y: number];

let point9: Point9 = [0, 0];
function move18(point: Point9, x: number, y: number): Point9 {
  console.log(point);
  return [point[0] + x, point[1] + y];
}
console.log(move18(point9, 9, 18));
console.log(point9);

type Point22D = { x: number; y: number };
type Point32D = { x: number; y: number; z: number };
type Person32 = { name: string; email: string };

let pt2: Point22D = { x: 0, y: 0 };
let pt3: Point32D = { x: 0, y: 0, z: 9 };
let p3: Person32 = { name: "Sanjeev", email: "some@example.com" };

pt2 = pt3;
//pt3 = pt2;
pt3 = pt2 as Point32D;

//pt3 = p3;
pt3 = p3 as unknown as Point32D;

const king = "elvis";
//king = "john";

const upperCase = king.toUpperCase();

console.log(upperCase);

//const assertion

const dave = {
  name: "Dave",
  skill: "drums",
  skillset: ["hello", "world"],
} as const;

//this usage

function double(this: { value: number }) {
  this.value = this.value * 2;
}

const valid = {
  value: 10,
  double,
};

console.log(valid.double());

type NameFields = { firstName: string; lastName: string; email: string };

function addFullName<T extends NameFields>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
}

const sanjeev = addFullName({
  firstName: "Sanjeev",
  lastName: "BA",
  email: "some@example.com",
  age: 40,
});

console.log(sanjeev.email);
console.log(sanjeev.fullName);

type Person9 = {
  name: string;
  age: number;
  salary: number;
};

let john: Person9 = {
  name: "John Dow",
  age: 20,
  salary: 20000,
};
//type PersonKeys = keyof Person9;

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  console.log(obj[key]);
}

logGet(john, "name");
//logGet(john, "mami");

type IsNumber<T> = T extends number ? "number" : "other";
