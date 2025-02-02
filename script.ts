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
    value2: ValueType) => {
    if (value1 > value2) {
        return value1;
    } else {
        return value2;
    }
};

console.log(longer("xzxz", "xxx"));
console.log(longer([], [1]));

//function that merges 2 tables

const mergeArrays = <ArrayType>(array1: ArrayType[], array2: ArrayType[]) => [
    ...array1,
    ...array2
];

console.log(mergeArrays<number | string>([1, 2], ["opaska", "małpa"]));

//functions that filters passed table
//2 types of functions for example

const filterArray1 = <InputType>(
    array: InputType[],
    filteringFunction: (item: InputType) => boolean 
) => array.filter(filteringFunction);

const filterArray2 = <
    ItemType,
    FilterFunction extends (item: ItemType) => boolean
>(
    array: ItemType[],
    filterFunction: FilterFunction
) => array.filter(filterFunction);

const numbers2 = [1, 2, 3, 4];
const filteredNumbers1 = filterArray1(numbers2, (number) => number % 2 === 0);
const filteredNumbers2 = filterArray2(numbers2, (number) => number % 2 === 0);
console.log(filteredNumbers1);
console.log(filteredNumbers2);

//optional arguments
//argument name can be a string or an undefined, that's why we need a ternary
const greet = (name?: string) => {
    console.log(`Hi${name !== undefined ? `, ${name}` : ""}`)
}

greet("Adrian");
greet();

//function like map without using .map()

const customMap = <InputItemType, OutputItemType>(
    array: InputItemType[],
    mapFunction: (item: InputItemType, index: number) => OutputItemType
) => {
    const newArray = [] as OutputItemType[];

    array.forEach((item, index) => {
        newArray.push(mapFunction(item, index))
    });

    return newArray;
}

const animals2 = ["monkey", "donkey"];
console.log(animals2.map((animal) => `${animal}`));
console.log(customMap([1, 2, 3, 4, 5, 6], item => item + 1));

//type object
//type object is everything that IS NOT a primitive type

const value: object = [];

//type unknown

const function1 = (value: any) => {
    value.doSomething();
}

const function2 = (value: unknown) => {
    value.doSomething();
}

const parseJSON = (jsonString: string): unknown => JSON.parse(jsonString);
const array = parseJSON("blahBlah");
array.push();

//if we have any, we can do whatever we want to a value
//if we have unknown, we can't do anything to a value

//type never
//if a function return nothing, then TS acknowledges it as type never