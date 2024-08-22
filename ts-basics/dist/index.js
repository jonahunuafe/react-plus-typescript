"use strict";
let user = [1, "Jonah"];
let mySize = "m";
const small = "s";
console.log(mySize);
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
let employee = {
    id: 1,
    name: "Jonah",
    retire: (date) => {
        console.log(date);
    }
};
employee.name = "Fejiro";
function getFirstElement(array) {
    return array[0];
}
const number_s = [1, 2, 3];
const firstNum = getFirstElement(number_s);
const strings = ["john", "koko"];
const firstString = getFirstElement(strings);
const response = {
    data: {
        name: "Kyle",
        age: 28
    },
    isError: false
};
function addTwo(num) {
    return num + 2;
}
addTwo(5);
const getHello = (s) => {
    return s;
};
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
function createUser(user) {
    return user;
}
createUser({ name: "josh", email: "g@gmail.com", isActive: true });
function getDbId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = [1, 2, "3"];
const jonah = {
    dbId: 22, email: "joe@gmail.com", userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: () => {
        return "trail started";
    },
    getCoupon: () => {
        return 10;
    }
};
class Person {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const hitesh = new Person("h@gmail.com", "john");
//# sourceMappingURL=index.js.map