/*
    [Type Annotations With Multidimensional Arrays]
*/
let arrayOne:string[] = ["a", "b", "c", "d"];
let arrayTwo: number[] = [1, 2, 3, 4, 5];
let arrayThree: (number | string)[] = [1, 2, 3, 4, 5, "a", "b", "c"];
let mdArray: (string| number| boolean[]| object)[] = [
    "eslam", "ahmed",
    20, 30,
    [true, false],
    {name: "eslam", age: 21}
];