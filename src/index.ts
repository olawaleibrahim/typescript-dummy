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