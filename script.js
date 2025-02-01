"use strict";
const getArea = (shape) => {
    if (shape.kind === "square") {
        return Math.pow(shape.sideLength, 2);
    }
    if (shape.kind === "circle") {
        return Math.PI * (Math.pow(shape.radius, 2));
    }
};
//generic functions
const firstElement = (array) => array[0];
//here function knows that firstNumber is a number or undefined type
const numbers = [4, 9];
const firstNumber = firstElement(numbers);
console.log(`First number: ${firstNumber}`);
//here function knows that firstAnimal is a string or undefined type
const animals = ["Dog", "Parrot", "Monkey"];
const firstAnimal = firstElement(animals);
const move = (animal) => {
    var _a, _b;
    if ("fly" in animal) {
        (_a = animal.fly) === null || _a === void 0 ? void 0 : _a.call(animal);
    }
    else {
        (_b = animal.swim) === null || _b === void 0 ? void 0 : _b.call(animal);
    }
};
//"is" operator
/* type Dog = { run: () => void; };
type Shark = { swim: () => void; };

let animal: Dog | Shark = getPet();

const isDog = (pet: Dog | Shark): pet is Dog => "run" in pet;

if (isDog(animal)) {
    animal.run();
} else {
    animal.swim();
} */
//basic functions
const greeter = (greetFunction) => {
    console.log(greetFunction("Hej!"));
};
const printToConsole = (text) => text;
greeter(printToConsole);
//function with 2 types of arguments
const map = (array, transformFunction) => array.map(transformFunction);
const floatNumbers = [2.15, 4.76];
const transformedNumbers = map(floatNumbers, (number) => number.toFixed(1));
console.log(transformedNumbers);
//function that accepts specific types of arguments
//this function takes 2 values and return one, which is longer
const longer = (value1, value2) => {
    if (value1 > value2) {
        return value1;
    }
    else {
        return value2;
    }
};
console.log(longer("xzxz", "xxx"));
console.log(longer([], [1]));
//function that merges 2 tables
const mergeArrays = (array1, array2) => [
    ...array1,
    ...array2
];
console.log(mergeArrays([1, 2], ["opaska", "małpa"]));
//functions that filters passed table
//2 types of functions for example
const filterArray1 = (array, filteringFunction) => array.filter(filteringFunction);
const filterArray2 = (array, filterFunction) => array.filter(filterFunction);
const numbers2 = [1, 2, 3, 4];
const filteredNumbers1 = filterArray1(numbers2, (number) => number % 2 === 0);
const filteredNumbers2 = filterArray2(numbers2, (number) => number % 2 === 0);
console.log(filteredNumbers1);
console.log(filteredNumbers2);
//optional arguments
//argument name can be a string or an undefined, that's why we need a ternary
const greet = (name) => {
    console.log(`Hi${name !== undefined ? `, ${name}` : ""}`);
};
greet("Adrian");
greet();
