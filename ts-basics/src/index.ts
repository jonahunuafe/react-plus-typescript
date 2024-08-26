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
    // retire: (date: Date) => void; or
    retire(date: Date): void;
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

// Interface means adding more values to the interface
interface Users {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    startTrail(): string;
    getCoupon(couponname: string, value: number): number
}

// reopening of the interface
interface Users {
    githubToken: string
}

// One advantage is inheritance
interface Admin extends Users {
    role: "admin" | "ta" | "learner"
}

// You can remove the Admin keyword and replace with Users. This will remove the inheritance.
// When removing the Admin keyword, also rememebre to remove the role to avoid errors.
const jonah: Admin = {
    dbId: 22, email: "joe@gmail.com", userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: () => {
        return 10
    }
}

// creating class in js using ts
// class Person {
//     public email: string
//     private name: string
//     readonly city: string = "Jupiter"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }
// }

// private can be access within the class not outside the class

class Person {
    protected _courseCount = 1

    readonly city: string = "Jaipur"
    constructor(
        public email: string, public name: string
    ) {

    }

    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if(courseNum <= 1) {
            throw new Error("Course count should not be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubPerson extends Person {
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4
    }
}

const hitesh = new Person("h@gmail.com", "john")


interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

// You can only use the keyword implements for interface

// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ) {

//     }
// }

// class Youtube implements TakePhoto, Story {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string
//     ) {

//     }

//     createStory(): void {
//         console.log("Story was created")
//     }
// }
