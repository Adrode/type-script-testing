"use strict";
//interfaces and types
{
    const getArea = (shape) => {
        if (shape.kind === "square") {
            return Math.pow(shape.sideLength, 2);
        }
        if (shape.kind === "circle") {
            return Math.PI * (Math.pow(shape.radius, 2));
        }
    };
}
//generic functions
{
    const firstElement = (array) => array[0];
    //here function knows that firstNumber is a number or undefined type
    const numbers = [4, 9];
    const firstNumber = firstElement(numbers);
    console.log(`First number: ${firstNumber}`);
    //here function knows that firstAnimal is a string or undefined type
    const animals = ["Dog", "Parrot", "Monkey"];
    const firstAnimal = firstElement(animals);
}
//"in" operator
{
    const move = (animal) => {
        var _a, _b;
        if ("fly" in animal) {
            (_a = animal.fly) === null || _a === void 0 ? void 0 : _a.call(animal);
        }
        else {
            (_b = animal.swim) === null || _b === void 0 ? void 0 : _b.call(animal);
        }
    };
}
//"is" operator
{
    /* type Dog = { run: () => void; };
    type Shark = { swim: () => void; };

    let animal: Dog | Shark = getPet();

    const isDog = (pet: Dog | Shark): pet is Dog => "run" in pet;

    if (isDog(animal)) {
        animal.run();
    } else {
        animal.swim();
    } */
}
//basic functions
{
    const greeter = (greetFunction) => {
        console.log(greetFunction("Hej!"));
    };
    const printToConsole = (text) => text;
    greeter(printToConsole);
}
//function with 2 types of arguments
{
    const map = (array, transformFunction) => array.map(transformFunction);
    const floatNumbers = [2.15, 4.76];
    const transformedNumbers = map(floatNumbers, (number) => number.toFixed(1));
    console.log(transformedNumbers);
}
//function that accepts specific types of arguments
//this function takes 2 values and return one, which is longer
{
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
}
//function that merges 2 tables
{
    const mergeArrays = (array1, array2) => [
        ...array1,
        ...array2
    ];
    console.log(mergeArrays([1, 2], ["opaska", "małpa"]));
}
//functions that filters passed table
//2 types of functions for example
{
    const filterArray1 = (array, filteringFunction) => array.filter(filteringFunction);
    const filterArray2 = (array, filterFunction) => array.filter(filterFunction);
    const numbers2 = [1, 2, 3, 4];
    const filteredNumbers1 = filterArray1(numbers2, (number) => number % 2 === 0);
    const filteredNumbers2 = filterArray2(numbers2, (number) => number % 2 === 0);
    console.log(filteredNumbers1);
    console.log(filteredNumbers2);
}
//optional arguments
//argument name can be a string or an undefined, that's why we need a ternary
{
    const greet = (name) => {
        console.log(`Hi${name !== undefined ? `, ${name}` : ""}`);
    };
    greet("Adrian");
    greet();
}
//function like map without using .map()
{
    const customMap = (array, mapFunction) => {
        const newArray = [];
        array.forEach((item, index) => {
            newArray.push(mapFunction(item, index));
        });
        return newArray;
    };
    const animals2 = ["monkey", "donkey"];
    console.log(animals2.map((animal) => `${animal}`));
    console.log(customMap([1, 2, 3, 4, 5, 6], item => item + 1));
}
//type object
//type object is everything that IS NOT a primitive type
{
    const value = [];
}
//type unknown
{
    const function1 = (value) => {
        value.doSomething();
    };
    const function2 = (value) => {
        //value.doSomething();
    };
    //const parseJSON = (jsonString: string): unknown => JSON.parse(jsonString);
    //const array = parseJSON("blahBlah");
    //array.push();
}
//if we have any, we can do whatever we want to a value
//if we have unknown, we can't do anything to a value
//type never
//if a function return nothing, then TS acknowledges it as type never
{
    const error = () => {
        throw new Error("Something went wrong!");
    };
}
//type function
//this type defines any function, that gets any arguments and returns any value
//IT IS NOT RECOMENDED TO USE IT!
{
    const doSomething2 = (someFunction) => someFunction("text");
    const doSomething3 = (someFunction) => someFunction("text");
    //rest parameters
    const multiply = (factor, ...numbers) => numbers.map((number) => factor * number);
    const numbers3 = [1, 2, 3];
    console.log(multiply(5, ...numbers3));
    const numbersToPow = [2, 5];
    console.log(Math.pow(...numbersToPow));
}
//destructuring of parameters
{
    const rectangleArea = ({ sideA, sideB }) => sideA * sideB;
    console.log(rectangleArea({ sideA: 5, sideB: 6 }));
}
//assigning functions with void
{
    const doNothing = () => { };
    const returnTrue = () => true;
    const valueTrue = returnTrue();
}
//readonly object property
{
    /* const doSomething = (someObject: SomeObject) => {
        console.log(someObject.property);
        someObject.property = "new value";
        someObject.person.name = "Adrian";
        someObject.person = {};
    } */
}
{
    const writablePerson = {
        name: "Adrian",
        age: 25,
    };
    const readonlyPerson = writablePerson;
    writablePerson.age = 30;
    //readonlyPerson.age = 30;
}
//index signature
{
    const colors = {
        blue: "#00f",
        red: "#f00",
    };
}
//interface extensions
{
    const dogo = {
        name: "Hauczek",
        legs: 4,
        bark: () => console.log(`Hau Hau`),
    };
    dogo.bark();
}
//intersection types
{
    const circle = {
        color: "red",
        radius: 5,
    };
}
//generic object types
{
}
//generic helpers
{
}
//readonly arrays
{
    const doSomething = (array) => {
        array[5];
        //array.push(10);
    };
    let numbers = [3, 4, 5];
    const readonlyNumbers = numbers;
    //numbers = readonlyNumbers;
}
//topple
{
    const array = ["tekst", 5];
    const [myString, myArray] = array;
}
