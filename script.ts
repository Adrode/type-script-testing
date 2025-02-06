//interfaces and types
{
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
}

//generic functions
{
    const firstElement = <ItemType>(array: ItemType[]): ItemType | undefined =>
        array[0];

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
    const greeter = (greetFunction: (text: string) => void) => {
        console.log(greetFunction("Hej!"));
    }

    const printToConsole = (text: string) => text;

    greeter(printToConsole);
}

//function with 2 types of arguments
{
    const map = <InputItemType, OutputItemType>(
        array: InputItemType[],
        transformFunction: (element: InputItemType) => OutputItemType
    ) => array.map(transformFunction);

    const floatNumbers = [2.15, 4.76];
    const transformedNumbers = map(floatNumbers, (number) => number.toFixed(1));

    console.log(transformedNumbers);
}

//function that accepts specific types of arguments
//this function takes 2 values and return one, which is longer
{
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
}

//function that merges 2 tables
{
    const mergeArrays = <ArrayType>(array1: ArrayType[], array2: ArrayType[]) => [
        ...array1,
        ...array2
    ];

    console.log(mergeArrays<number | string>([1, 2], ["opaska", "małpa"]));
}

//functions that filters passed table
//2 types of functions for example
{
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
}


//optional arguments
//argument name can be a string or an undefined, that's why we need a ternary
{
    const greet = (name?: string) => {
        console.log(`Hi${name !== undefined ? `, ${name}` : ""}`)
    }

    greet("Adrian");
    greet();
}

//function like map without using .map()
{
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
}

//type object
//type object is everything that IS NOT a primitive type
{
    const value: object = [];
}

//type unknown
{
    const function1 = (value: any) => {
        value.doSomething();
    }

    const function2 = (value: unknown) => {
        //value.doSomething();
    }

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
    }
}

//type function
//this type defines any function, that gets any arguments and returns any value
//IT IS NOT RECOMENDED TO USE IT!
{
    const doSomething2 = (someFunction: Function) => someFunction("text");
    const doSomething3 = (someFunction: (text: string) => void) => someFunction("text");

    //rest parameters

    const multiply = (factor: number, ...numbers: number[]) =>
        numbers.map((number) => factor * number);

    const numbers3 = [1, 2, 3];
    console.log(multiply(5, ...numbers3));

    const numbersToPow = [2, 5] as const;
    console.log(Math.pow(...numbersToPow));
}

//destructuring of parameters
{
    interface RectangleArea {
        sideA: number;
        sideB: number;
    }

    const rectangleArea = ({ sideA, sideB }: RectangleArea) => sideA * sideB;

    console.log(rectangleArea({ sideA: 5, sideB: 6 }));

}

//assigning functions with void
{
    type FunctionType = () => void;

    const doNothing: FunctionType = () => { };
    const returnTrue: FunctionType = () => true;


    const valueTrue = returnTrue();
}

//readonly object property
{
    interface SomeObject {
        readonly property: string;
        readonly person: {
            name: string;
            age: number;
        }
    }

    /* const doSomething = (someObject: SomeObject) => {
        console.log(someObject.property);
        someObject.property = "new value";
        someObject.person.name = "Adrian";
        someObject.person = {};
    } */
}
{
    interface WritablePerson {
        name: string;
        age: number;
    }

    interface ReadonlyPerson {
        readonly name: string;
        readonly age: number;
    }

    const writablePerson: WritablePerson = {
        name: "Adrian",
        age: 25,
    }

    const readonlyPerson: ReadonlyPerson = writablePerson;

    writablePerson.age = 30;
    //readonlyPerson.age = 30;
}

//index signature
{
    interface Colors {
        [index: string]: string;
    }

    const colors: Colors = {
        blue: "#00f",
        red: "#f00",
    }
}

//interface extensions
{
    interface Animal {
        name: string;
    }

    interface FourLegged {
        legs: number;
    }

    interface Dog extends Animal, FourLegged {
        bark: () => void;
    }

    const dogo: Dog = {
        name: "Hauczek",
        legs: 4,
        bark: () => console.log(`Hau Hau`),
    }

    dogo.bark();
}

//intersection types
{
    interface Colorful {
        color: string;
    }

    interface Circle {
        radius: number;
    }

    type ColorfulCircle = Colorful & Circle;

    const circle: ColorfulCircle = {
        color: "red",
        radius: 5,
    }
}

//generic object types
{
    interface APIResponse<DataType> {
        statusCode: number;
        error: boolean;
        data: DataType;
    }

    interface User {
        id: number;
        name: string;
    }

    type APIUserResponse = APIResponse<User>;
}

//generic helpers
{
    type OrNull<Type> = Type | null;
    type OneOrMany<Type> = Type | Type[];
    type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
}

//readonly arrays
{
    const doSomething = (array: ReadonlyArray<number>) => {
        array[5];
        //array.push(10);
    }

    let numbers = [3, 4, 5]
    const readonlyNumbers: readonly number[] = numbers;

    //numbers = readonlyNumbers;
}

//topple
{
    const array: readonly [string, number, ...boolean[]] = [
        "tekst", 5, true, true, false
    ];

    const [myString, myArray, myBoolean, myBoolean2] = array;
}

//keyof operator
{
    interface Person {
        name: string;
        surname: string;
        age: number;
    }

    type PersonProperty = keyof Person;

    const personProperty: PersonProperty = "age";
}

//typeof operator
{
    const name = "Adrian";
    console.log(typeof name); // "string"

    const surname: typeof name = "Adrian";
    //typeof name is an amnotation to literal type
}

//typeof and keyof connection