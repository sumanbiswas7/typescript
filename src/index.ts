// Basic types
const user: string = "monica";
const age: number = 18;
const isMarried: boolean = false;

// Arrays and Tuples
const friends: string[] = ["sammuel", "rick"];
const sammuelMobile: [string, number] = ["sammuel", 812933004];
let friendsNumber: [string, number][];
friendsNumber = [
  ["sammuel", 812933004],
  ["rick", 922132123],
];

// Unions
const userId: number | string = "2911";

// Enums
enum directions {
  east = "east",
  west = "west",
  south = "south",
  north = "north",
}
const eastDirection = directions.east;

// Objects
type user = {
  name: string;
  age: number;
};
const userObj: user = {
  name: "Linda",
  age: 22,
};

// Type Assertions
const randomVar: any = "62";
const randomVar2 = <number>randomVar;
const randomVar3 = randomVar as number;

// Interfaces
interface Product {
  readonly id: number | string;
  name: string;
  price?: number;
}
const products: Product = {
  id: "X232FFF",
  name: "Himalya Facewash",
  price: 120,
};

// Functions
function twoSum(num1: number, num2: number): number {
  return num1 + num2;
}

type Genders = "male" | "female" | "others";
function setGender(gender: Genders) {
  console.log(`Gender set - ${gender}`);
}
setGender("male");

// Classes
interface PersonInterface {
  setGender(gender: string): string;
}

class Person implements PersonInterface {
  private id: number;
  protected name: string;
  age: number;
  gender?: string;

  constructor(id: number, name: string, age: number) {
    (this.id = id), (this.name = name), (this.age = age);
    console.log(`Person - ${name} created`);
  }

  getId() {
    console.log(`id - ${this.id}`);
  }
  setGender(gender: string) {
    this.gender = gender;
    return "gender set";
  }
}
// const mike = new Person(999, "mike", 18);
// mike.getId();
// mike.setGender("male");
