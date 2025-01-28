//interfaces and types
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;

const getArea = (shape: Shape) => {
    if(shape.kind === "square") {
        return shape.sideLength ** 2;
    }

    if(shape.kind === "circle") {
        return Math.PI * (shape.radius ** 2); 
    }
}

//basic functions in TS and typing function property
type GreetFunction = {
    (text: string): void;
    myName: string;
};

const greeter = (greetFunction: GreetFunction) => {
    greetFunction(`Hello ${greetFunction.myName}!`);
}

const printToConsole = (text: string) => {
    console.log(text);
}

printToConsole.myName = "Adrian";

greeter(printToConsole);

//generic functions
const firstElement = <ItemType>(array: ItemType[]): ItemType | undefined =>
    array[0];

//here function knows that firstNumber is a number or undefined type
const numbers = [4, 9];
const firstNumber = firstElement(numbers);
console.log(`First number: ${firstNumber}`);

//here function knows that firstAnimal is a string or undefined type
const animals = ["Dog", "Parrot", "Monkey"];
const firstAnimal = firstElement(animals);

//in operator
type Fish = { swim: () => void; };
type Bird = { fly: () => void; };
type Human = { fly?: () => void; swim?: () => void; };

const move = (animal: Fish | Bird | Human) => {
    if("fly" in animal) {
        animal.fly?.();
    } else {
        animal.swim?.();
    }
}