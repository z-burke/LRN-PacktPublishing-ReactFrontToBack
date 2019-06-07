// CONST & LET
let name = 'John';
let test;

name = 'Jack';

const person = {
    name: 'John',
    age: 33
};

person.name = 'Jack';

const nums = [1, 2, 3, 4];
nums.push(5);

console.log(nums);


// ARROW FUNCTIONS

// function sayHello() {
//     console.log('Hello');
// }

const sayHello = name => console.log(`Hello ${name}`);

sayHello('Brad');


const fruits = ['Apples', 'Oranges', 'Grapes'];

// FOREACH
fruits.forEach((fruit, index) => console.log(fruit));

// MAP
const fruit = fruits.map((fruit) => fruit.slice(0,-1).toUpperCase());
console.log(fruit);

// FILTER
const people = [
    {id: 1, name: 'Karen'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Sharon'},
];
const people2 = people.filter(person => person.id != 2);
console.log(people2);


// SPREAD

const arr = [1, 2, 3];

const arr2 = [...arr, 4]
console.log(arr2)

const arr3 = [...arr.filter(num => num !== 2)];
console.log(arr3);

const person1 = {
    name: 'Brad',
    age: 36
}

const person2 = {
    ...person1,
    email: 'brad@gmail.com'
}


console.log(person2);

// DESTRUCTURING

const profile = {
    profname: 'John Doe',
    address: {
        street: '40 Main st',
        city: 'Boston'
    },
    hobbies: ['movies', 'music']
};

const { profname, address, hobbies } = profile;
console.log(profname, address.street, hobbies[0]);

const { street, city } = profile.address
console.log(street, city);


// CLASSES

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age}`;
    }
}

const cperson1 = new Person('John', 33);
const cperson2 = new Person('Sara', 28);

console.log(cperson2.age);
console.log(cperson1.greet())


// SUBCLASSES

class Customer extends Person {
    constructor(name, age, balance) {
        super(name, age);
        this.balance = balance
    }

    info() {
        return `${this.name} owes $${this.balance}.00`;
    }
}

const customer1 = new Customer('Kevin', 32, 300);
console.log(customer1.name);
console.log(customer1.info());
// MODULES