"use strict";
// Basic types
const user = "monica";
const age = 18;
const isMarried = false;
// Arrays and Tuples
const friends = ["sammuel", "rick"];
const sammuelMobile = ["sammuel", 812933004];
let friendsNumber;
friendsNumber = [
    ["sammuel", 812933004],
    ["rick", 922132123],
];
// Unions
const userId = "2911";
// Enums
var directions;
(function (directions) {
    directions["east"] = "east";
    directions["west"] = "west";
    directions["south"] = "south";
    directions["north"] = "north";
})(directions || (directions = {}));
const eastDirection = directions.east;
const userObj = {
    name: "Linda",
    age: 22,
};
// Type Assertions
const randomVar = "62";
const randomVar2 = randomVar;
const randomVar3 = randomVar;
const products = {
    id: "X232FFF",
    name: "Himalya Facewash",
    price: 120,
};
// Functions
function twoSum(num1, num2) {
    return num1 + num2;
}
function setGender(gender) {
    console.log(`Gender set - ${gender}`);
}
setGender("male");
class Person {
    constructor(id, name, age) {
        (this.id = id), (this.name = name), (this.age = age);
        console.log(`Person - ${name} created`);
    }
    getId() {
        console.log(`id - ${this.id}`);
    }
    setGender(gender) {
        this.gender = gender;
        return "gender set";
    }
}
// const mike = new Person(999, "mike", 18);
// mike.getId();
// mike.setGender("male");
