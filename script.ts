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