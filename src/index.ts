let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;

// any type 
let level;
level = 1;
level = "any";
console.log(level);

// arrays
let numbers: number[] = [1, 2, 3];
let numbers_new: (number | string)[] = [1, 2, 3, "hello world"];

// tuples (fixed length array)
let user: [number, string] = [1, "Wale"]

// enums
enum Size {Small=10, Medium, Large};
let mySize: Size = Size.Medium;
console.log(`my size = ${mySize}`);

// functions
function calculateTax(income: number, taxYear: number = 2023): number {
    if (taxYear < 2023) {
        return income * 2
    }
    return income * 1.3
}

calculateTax(10_000);

type Employee = {
    readonly id: number, 
    name: string,
    retire: (date: Date) => void

}

// objects
let employee: Employee = {
    id: 1, 
    name: "Wale",
    retire: (date: Date) => {
        console.log(date);
    }
};
// employee.id = 0; readonly property

// union types
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === "number")
        return weight * 2.2
    else
        return parseInt(weight) * 2.2
}

console.log(`kg to lbs: ${kgToLbs(10)}`);
console.log(`kg to lbs: ${kgToLbs("10kg")}`);

// intersection types
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";