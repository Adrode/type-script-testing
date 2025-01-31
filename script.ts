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
    if (shape.kind === "square") {
        return shape.sideLength ** 2;
    }

    if (shape.kind === "circle") {
        return Math.PI * (shape.radius ** 2);
    }
}

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

//"in" operator
type Fish = { swim: () => void; };
type Bird = { fly: () => void; };
type Human = { fly?: () => void; swim?: () => void; };

const move = (animal: Fish | Bird | Human) => {
    if ("fly" in animal) {
        animal.fly?.();
    } else {
        animal.swim?.();
    }
}

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
const greeter = (greetFunction: (text: string) => void) => {
    console.log(greetFunction("Hej!"));
}

const printToConsole = (text: string) => text;

greeter(printToConsole);

//function with 2 types of arguments

const map = <InputItemType, OutputItemType>(
    array: InputItemType[],
    transformFunction: (element: InputItemType) => OutputItemType
) => array.map(transformFunction);

const floatNumbers = [2.15, 4.76];
const transformedNumbers = map(floatNumbers, (number) => number.toFixed(1));

console.log(transformedNumbers);

//function that accepts specific types of arguments
//this function takes 2 values and return one, which is longer

const longer = <ValueType extends { length: number }>(
    value1: ValueType,
    value2: ValueType ) => {
    if(value1 > value2) {
        return value1;
    } else {
        return value2;
    }
};

console.log(longer("xzxz", "xxx"));
console.log(longer([], [1]));
//there is some issue, because function doesn't return
//longer value, but just the second value

