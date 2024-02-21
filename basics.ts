//primitives: number, strings, booleans, null, undefined
//More complex: arrays, objects
//Function types, parameters


//Primitive

let age: number;

age = 12;

let userName: string;

userName = 'Jonah';

let isInstructor: boolean;

isInstructor = true;

//More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string,
    age: number,
};

let person: Person;

person = {
    name: 'Jonah',
    age: 39
}

// person = {
//     isEmployee: true;
// }

let people: Person[];

//Type inference

let course = 'React - A Powerful Tool';

//course = 12345;

//Union types

let courses: string | number = 'React - A Powerful Tool';

courses = 12345;