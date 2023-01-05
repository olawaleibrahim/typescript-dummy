"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
level = "any";
console.log(level);
let numbers = [1, 2, 3];
let numbers_new = [1, 2, 3, "hello world"];
let user = [1, "Wale"];
var Size;
(function (Size) {
    Size[Size["Small"] = 10] = "Small";
    Size[Size["Medium"] = 11] = "Medium";
    Size[Size["Large"] = 12] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(`my size = ${mySize}`);
function calculateTax(income, taxYear = 2023) {
    if (taxYear < 2023) {
        return income * 2;
    }
    return income * 1.3;
}
calculateTax(10000);
//# sourceMappingURL=index.js.map