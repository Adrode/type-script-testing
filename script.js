"use strict";
const getArea = (shape) => {
    if (shape.kind === "square") {
        return Math.pow(shape.sideLength, 2);
    }
    if (shape.kind === "circle") {
        return Math.PI * (Math.pow(shape.radius, 2));
    }
};
//functions in TS
const greeter = (greetFunction) => {
    greetFunction("Hello!");
};
const printToConsole = (text) => {
    console.log(text);
};
greeter(printToConsole);
