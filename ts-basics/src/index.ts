// The syntax for typescript let variablename: type = value;

// this is a tuple. Its good you only make it two. It takes care of order
let user: [number, string] = [1, "Jonah"]; 
// enum is useful when you have a handfull of options
const enum Size { 
    Small = "s",
    Medium = "m", 
    Large =" l" 
}

let mySize: Size = Size.Medium;
const small = Size.Small;
console.log(mySize);

// the :number outside the bracket meaans you are returning a number.
function calculateTax(income: number): number {
   if(income < 50_000)
    return income * 1.2;
   return income * 1.3;
}

// we use readonly so that it will not be modified, it cannot be changed or manipulated.

// we use type alias so we can create an instance of the object which can be used in multiple places.

type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
    creditcardDetails?: number
}

let employee: Employee = { 
    id: 1,
    name: "Jonah",
    retire: (date: Date) => {
        console.log(date)
    }
}

employee.name = "Fejiro"

// generic type
function getFirstElement<ElementType>(array: ElementType[]) {
    return array[0]
}

const number_s = [1, 2, 3]
const firstNum = getFirstElement(number_s)

const strings = ["john", "koko"]
const firstString = getFirstElement(strings)

type ApiResponse<Data> = {
    data: Data;
    isError: boolean
}

type UserResponse = ApiResponse<{ name: string; age: number }>

const response: UserResponse = {
    data: {
        name: "Kyle",
        age: 28
    },
    isError: false
}


function addTwo(num: number): number {
    return num  + 2;
}

addTwo(5)


const getHello = (s: string): string => {
    return s
}

const heros = ["thor", "spiderman", "ironman"]

// This is a better function bcos you implicitly say you are returning a string
heros.map((hero): string => {
    return `hero is ${hero}`
})


function consoleError(errMsg: string): void {
    console.log(errMsg)
}

function handleError(errMsg: string): never {
    throw new Error(errMsg)
}

type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user: User): User {
    return user;
}

createUser({name :"josh", email: "g@gmail.com", isActive: true})


function getDbId(id: number | string) {
    if(typeof id === "string") {
        id.toUpperCase()
    }
}


const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (number | string)[] = [1, 2, "3"]

