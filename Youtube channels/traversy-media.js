console.log("welcome to javascript");
alert("srikanth");
console.error("welcome to javascript");
console.warn("welcome to javascript");
//-----------------------------------------------------------------------------------

// types of declaration:(var , let , const)
let score;
score=10;
console.log(score);

// Datatypes:
// string , number, boolean, null,undefined ,  regular expressions , array, object

var name="srikanth";
var age =30;
const rating =4.5;
const isCool=true;
const x=null;
const y =undefined;
let z;
console.log(typeof name, age, rating, isCool, x, z);

const name1 ="Srikanth";
const Age =25;
// Concatenation
console.log("my name is" +" "+ name1 + " and I am age");
// Template string
const hello= (`my name is ${name1} and my age is ${Age}`);
console.log(hello)

const s ='Hello World! 🌍';
// console.log(s.length)
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(5))
// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split(''))

const S ='technology, computer, it, code';
console.log(S.split(', '))
//------------------------------------------------------------------------------

// Array:variables that stores multiple values
const fruits = ['apples','banana', 'oranges','pears', 10, true];
fruits[6]= 'mango';
fruits.push('lemon juice');      // push adds last 
fruits.unshift('Strawberries');  // unshift add first
fruits.pop();                    // pop will delete last one
//console.log(Array.isArray(fruits));  // true
//console.log(Array.isArray('hello'));  // false
//console.log(fruits.indexOf('pears'))  // 4
// console.log(fruits)
// console.log(typeof fruits[5])

//constructor-Array
const numbers = new Array(1,2,3,4,5);
console.log(numbers)
//-------------------------------------------------------------------------
 

// js Object literals:
const person = {
    firstName:'john',
    lastName:'Doe',
    age:30,
    hobbies:['music', 'movies','sports'],
    address: {
        street: '50 main st',
        city: 'siddepet',
        state: 'Telangana'
    }

}

console.log(person);
console.log(person.firstName);
console.log(person.hobbies[1]);
console.log(person.address.street);
//------------------------------------------------------------------------------------------------------


// Destructuring:
const {firstName, lastName, address: {city,state} } = person;
console.log(city);

person.email = 'john12345@gmail.com'
console.log(person);


// 1=> Arrays Objects:
const todos = [
    {
        id:1,
        text:'take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentist app',
        isCompleted: false
    }
]

//for loop

for (let i=0; i<todos.length; i++){
    console.log(todos[i].id)
}


// for...of
for (let todo of todos) {
    console.log(todo.id);
}

// forEach 
todos.forEach(function(todo){
    console.log(todo.text);            
});

//map
 const todoText= todos.map(function(todo){
    return todo.id;
});
console.log(todoText)    //[ 1, 2, 3 ]

//filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})
// console.log(todoCompleted);      //[ { id: 3, text: 'Dentist app', isCompleted: false } ]
// console.log(todoCompleted);         // [ 'take out trash', 'Meeting with boss' ]


// console.log(todos[1].text);
// const todoJson =JSON.stringify(todos);
// console.log(todoJson);
// console.log(JSON.stringify(todos))

// for loop :
//passing 3 parameters
// first is assigning the value to varaiable 
// second => condition
// third  => Iteration

// for (var i= 1; i<=5; i++){
//     // console.log(i)
//     console.log(`for loop no: ${i}`);
// }
// console.log("outside loop is", i)

// while 
// let i=0;
// while(i<=5) {
//     console.log(`While Loop No: ${i}`);
//     i++;
// }
//------------------------------------------------------------------------------------------------

// conditional statements:

//  Difference b/w == & ===
const y1 =10;
if(y1===10){
    // console.log(true)
}else{
    // console.log(false)
}


const x1 =5;
if (x1 === 10){
    console.log('X is 10');
}else if(x1>10) {
    console.log('x is greater than 10');
}else{
    // console.log('x is less than 10');
}

//   || => or  => one must be true
const a = 6;
const b = 11;
// if ( a>5 || b>10 ) {
//     console.log('a is more than 5 or b is more than 10')
// }

//  && => And  both should be true
if ( a>5 || b>10 ) {
    // console.log('a is more than 5 or b is more than 10')
}

//-----------------------------------------------------------------------------------------

// ternary Operator:
const p = 10;
const color = p >10 ? 'red' :'blue';   // p>10 => condition ,  red, blue => True or False
console.log(color);

//-----------------------------------------------------------------------------

// switch
switch(color){
    case 'red':
        console.log('Color is red');
    break;
    case 'blue':
        console.log('Color is blue');
    break;
    default:
        console.log('Color is not Red or Blue');
    break;
}
//---------------------------------------------------------------------------------

// Functions 
function addNum(num1=1, num2=1){      // it will overide the values bydefault
    console.log(num1 + num2)
}
addNum(5,5);


function addNum(num1=1, num2=1){  
    return num1+num2
}
console.log(addNum(50,50));

// Arrow Function 
// const add = ()=>{ };
// const add = num => num*2;
// console.log(add(5))

const add = (num1=1, num2=1) =>{
    return num1*num2;
}
console.log(add(100, 100));


// Object oriented programming language:

//constructor function
function person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthYear = function() {
    //     return this.dob
    // }
    // this.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`
    // }

}
person.prototype.getBirthYear = function() {
    return this.dob
}

person.prototype.getFullName = function(){
    return  `${this.firstName} ${this.lastName}`
}

// class
class person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// Instantiate object
const person1 = new person('john', 'Doe', '4-10-1998');
const person2 = new person('srikanth', 'yadav', '12-04-1998');
const person3 = new person('pavan', 'pusala', '1-01-1998');
// console.log(person1);
// console.log(person2.firstName);
// console.log(person3.dob);

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person)

//----------------------------------------------------------------------------------------------


// Dom => Document object model


