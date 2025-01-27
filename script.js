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
