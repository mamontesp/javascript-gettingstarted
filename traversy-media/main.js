// var, let, const
// var-> Globally 
// let & const -> Locally
// let reasign values
// String, Numbers, Boolean, null, undefined, Symbol

/*const name= 'John';
const age=30;*/

//const rating=4.5;
//const isCool=true;
//const x = null;
//const y = undefined;

//let z;

//console.log(typeof z);

//Concatenation
/*console.log('My name is '+ name+ ' and I am '+ age);
*/
//Template strings

/*
const hello = `My name is ${name} and I am ${age}`;
console.log(hello)
*/

/*const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5));
const tech = 'technology, computers, it, code'
console.log(tech.split(', '));
*/

//Arrays

/*const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes'
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop()

console.log(fruits[1]);
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));
*/

//Object Literals
/*const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

person.email = 'john@gmail.com';
console.log(person);

const {firstName, lastName, address: {city}} = person;
console.log(city);
*/
/*
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

console.log(todos[1].text);
*/

//Convert to Json

/*
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/

//While loop
/*
let i=0;
while(i<10) {
    console.log(`While loop Number:${i}`);
    i++;
}
*/

//For
/*
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}

for (let todo of todos){
    console.log(todo.text);
    console.log(todo.id);
}
*/
/*
//forEach
todos.forEach(function(todo) {
    console.log(todo.text);
});

//map
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

//filter
const todoTextFiltered = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoTextFiltered);
*/

//Conditions
/*
const x = 20;
if (x === 10){
    console.log('x is 10');
} else {
    console.log('x is NOT 10')
}
*/
/*
const x = 9;
const color = x > 10 ? 'red' : 'blue';
console.log(color) 
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
*/


//functions
/*
function addNums(num1=1, num2=1) {
    return num1 + num2;
}
console.log(addNums(5,5));

//Arrow functions
const addNum2 = (num1=1, num2=1)=> num1 + num2;

console.log(addNum2(5,5));

//Arrow functions
const addNum3 = num1 => num1 + 5;

console.log(addNum3(5));

todos.forEach((todo) => console.log(todo))
*/

//Object oriented programming

//Constructor function
/*
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function (){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-3-1970');

console.log(person1.getBirthYear());
console.log(person1.getFullName());
*/

//Prototype of functions
/*
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
*/

//Class
/*
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-3-1970');

console.log(person1)
console.log(person1.getBirthYear());
console.log(person1.getFullName());
*/

//DOM
//How to select data from HTML -> DOM

//Single element
/* const form = document.getElementById('my-form');
const container = document.querySelector('.container')
const label = document.querySelector('h1')
console.log(form);
console.log(container);
console.log(label); */

// Multiple element
/* console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li')); */

/* const items = document.querySelectorAll('.item');

items.forEach(item => console.log(item));
 */

 //Manipulating the DOM

/*  const ul= document.querySelector('.items')
 //ul.lastElementChild.remove();
 ul.firstElementChild.textContent='Hello'
 ul.children[1].innerText = 'Brad';
 ul.lastElementChild.innerHTML= '<h4>Hello</h4>'

 const btn = document.querySelector('.btn');
 btn.style.background = 'red';
 console.log(btn) */

 //Events
 /*
 const btn = document.querySelector('.btn');
 btn.addEventListener('mouseout',(e) => {
     e.preventDefault();
    console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'; 
 });
 */

 const myForm = document.querySelector('#my-form');
 const nameInput = document.querySelector('#name'); 
 const emailInput = document.querySelector('#email');
 const msg = document.querySelector('.msg');
 const userList = document.querySelector('#users');

 myForm.addEventListener('submit', onSubmit);

 function onSubmit(e){
     e.preventDefault();
     if(nameInput.value === '' || emailInput.value === '') {
         msg.classList.add('error');
         msg.innerHTML = 'Please enter all fields';
         setTimeout(()=>msg.remove(), 3000);
     } else {
         const li = document.createElement('li');
         li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
         userList.appendChild(li);
         //Clear fields
         nameInput.value = '';
         emailInput.value = '';
     }
 }

