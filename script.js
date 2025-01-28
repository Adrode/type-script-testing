"use strict";
const getArea = (shape) => {
    if (shape.kind === "square") {
        return Math.pow(shape.sideLength, 2);
    }
    if (shape.kind === "circle") {
        return Math.PI * (Math.pow(shape.radius, 2));
    }
};
const greeter = (greetFunction) => {
    greetFunction(`Hello ${greetFunction.myName}!`);
};
const printToConsole = (text) => {
    console.log(text);
};
printToConsole.myName = "Adrian";
greeter(printToConsole);
//generic functions
const firstElement = (array) => array[0];
//here function knows that firstNumber is a number or undefined type
const numbers = [4, 9];
const firstNumber = firstElement(numbers);
console.log(`First number: ${firstNumber}`);
//here function knows that firstAnimal is a string or undefined type
const animals = ["Dog", "Parrot", "Monkey"];
const firstAnimal = firstElement(animals);
const showCar = (car) => {
    console.log(`Brand: ${car.brand}`);
};
