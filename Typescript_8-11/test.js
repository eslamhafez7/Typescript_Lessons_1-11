function getData(name = "eslam", age, country = "un") {
    return name + " " + age + " " + country;
}
console.log(getData(undefined));
console.log(typeof undefined);