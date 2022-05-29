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
