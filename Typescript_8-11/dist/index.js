"use strict";
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name} Your Age is ${age} and Sallary is ${salary} and test variables is ${test}`;
    }
    return 100;
}
showDetails("Eslam", 21, 5000);
function getData(name, age, country) {
    return name + " " + age + " " + country;
}
console.log(getData("Eslam", 20));
function addAll(...nums) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}
console.log(addAll(10, 20, 30, 40, 50, 10.5, +true));
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20));
const addWithArrow = (num1, num2) => num1 + num2;
console.log(addWithArrow(10, 20));
//# sourceMappingURL=index.js.map