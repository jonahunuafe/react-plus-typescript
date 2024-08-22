// The syntax for typescript let variablename: type = value;
// this is a tuple. Its good you only make it two. It takes care of order
var user = [1, "Jonah"];
var mySize = "m" /* Size.Medium */;
var small = "s" /* Size.Small */;
console.log(mySize);
// the :number outside the bracket meaans you are returning a number.
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
var employee = {
    id: 1,
    name: "Jonah",
    retire: function (date) {
        console.log(date);
    }
};
employee.name = "Fejiro";
// generic type
function getFirstElement(array) {
    return array[0];
}
var number_s = [1, 2, 3];
var firstNum = getFirstElement(number_s);
var strings = ["john", "koko"];
var firstString = getFirstElement(strings);
var response = {
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
var getHello = function (s) {
    return s;
};
var heros = ["thor", "spiderman", "ironman"];
// This is a better function bcos you implicitly say you are returning a string
heros.map(function (hero) {
    return "hero is ".concat(hero);
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
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, 2, "3"];
// You can remove the Admin keyword and replace with Users. This will remove the inheritance.
// When removing the Admin keyword, also rememebre to remove the role to avoid errors.
var jonah = {
    dbId: 22, email: "joe@gmail.com", userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
