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