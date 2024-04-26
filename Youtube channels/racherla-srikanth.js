/*
    html => Structure, used for creating content on webpage
    css => styling, appearance ,layout of web page.
    javascript => Functionality, Interaction
    Makes Web pages Dynamic 
    User interaction
*/
//-------------------------------------------------------
/*
//vs-code Extension:
Material Theme, Material Icon Theme, Auto Rename Tag,
Live Server, prettier, 

//Emmet: emmet.io 
(!) boiler plate code 
.newDiv => <div class="newDiv">Hello</div>
.heading#mainHeading
lorem5

//Diff b/w Inline, Internal, External files

function sayHello(){
  return  document.querySelectorAll(".btn").forEach((item) => {
        item.addEventListener("click", () =>{
            alert(" External javascript ");
        })
    })
}
sayHello()

console.log("hello welcome to javascript world🌍");
document.write("hello")
window.alert(5+6)
prompt("hello")
confirm("srikanth")
console.error("javascript code error");
console.warn("javascript code warning");

// javascript comments

*/
//-------------------------------------------------------

/*
// variables ->  most basic building block
// variables ->  store , Access, modify === value
// variables can store any type of data
// type of operator defines type of variable or Expression.
// How to declare a variable, assignment operator , assign value

let name;
name='srikanth'
console.log(name)

let address, zip, state;
address='hyderabad';
zip='502267';
state='telangana';

console.log(Name, address, zip, state)

//variable names can contain digits, letters, underscore, $ dollar 
// Must start with letter , $ or _

// no keywords
//cannot start with numbers


//  case sensitive - fullname vs fullName
// CamelCase or underscore

let first_258$Name ="pavan Kalyan"
console.log(first_258$Name);

let firstName ='sai kumar';
console.log(firstName)
*/
//-------------------------------------------------------------------

/*
// var , let , const 

// using var  - var will re-assign & re-declare the values
// var is a function scope
var someValue ="some data";
 var someValue="new value added for var";
 someValue="new Content added just now";
 console.log(someValue)

// using let    - let will re-assign, it will not re-declare the values
// let is a block scope 
let frstName ="hyd";
frstName ="Hyderabad"
console.log(frstName)


//using const - const will not work in  reassign & re-declaration
// const is a block scope
const address_ = "Bangalore"
console.log(address_)

// double quote & single quote
// "" or ''

const skill1 = 'Srikanth\'s';
const skill2 = "Srikanth's  have idea on lang like HTML, CSS, JS "
console.log(skill1)
console.log(skill2)


// String Concatenation - Combine string values
// `` - Backticks (template string ) easier option

const fname = "srikanth";
const lname = "yadav ";
let flname= fname+"     "+ lname;
console.log(flname)
console.log("my full name is:"+ fname +" " +lname);

const website = "google";
let url = "https:/www." + website+".com";
console.log(url)
*/
//----------------------------------------------------------------

/*
// Numbers 
//Loosely Typed = don't declare type

const num = 10 + 4 - 10 * 10;
const num1 = (10 + 4 - 10) * 10;
const num2 = 10 + (4 - 10) * 10;
console.log( "numbers:", num)
console.log( "numbers:", num1)
console.log( "numbers:", num2)


const firstNumber = 123;
const secondNumber = 456;
const thirdNumber = "789"
const add = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const remai = firstNumber % secondNumber
console.log(add, sub, multi, div, remai)

const stringAdd = firstNumber + thirdNumber +secondNumber;
console.log(stringAdd)


// Numbers 
// +=, -=, *=, /=, ++, --. %
// module(%) operator return the remainder value

let firstNum = 123;
// firstNum = firstNum+10;
firstNum += 100
firstNum -= 100
firstNum *= 5
console.log(firstNum);
firstNum++;
firstNum++;
firstNum++;
firstNum++;
console.log(firstNum)
firstNum--;
firstNum--;
firstNum--;
firstNum--;
firstNum--;
console.log(firstNum)


// implicit type conversion

const fnamE ="sandeboina";
const lnamE ="srikanth";
const fullNamE =fnamE + " "+ lnamE;
console.log(fullNamE)

const no1 =10;
const no2 =20;
const result = no1+no2;
console.log(result);


let result2 = fnamE - lnamE;
console.log(result2)


let x= "10";
let y ="20";
let z= x+y;
console.log(z);

*/
//---------------------------------------------------------------

/*
//Data types:
// primitive  ->   string , Number, Boolean, Null, Undefined, symbol
// object     ->   Array, Function , Object

// typeOf - Operators returns (the types of variables) , (types of values ), and Expression

//string
const f_Name = "srikanth";
console.log(typeof f_Name)

//Boolean
const f_Boolean = true;
const f_Boolean1 = false;
console.log(typeof f_Boolean)
console.log( f_Boolean1)

//Number
const value1 = 100;
const value2 = 10.1525
console.log(typeof value1)

// null

const xyz = null;
console.log(typeof xyz);

// undefined
let value3 ;
console.log(value3);


// what is the difference b/w undefined & not defined ?
// undefined -> value 
// not defined -> error

*/
//===========================================================

/*

// Arrays, Functions, and Objects
// Arrays, [], 0 index based

const fruit1= "banana";
const fruits2="mango";
const fruits3="apple";
const fruits4 ="blackberries";
const fruits5 ="blueberries";
const fruits6 ="strawberries";

// In a single variable you can store multiple values is called array;

const fruitList= [
    "banana",
    "mango",
    "apple",
    "blackberries",
    "blueberries",
    "strawberries",
]

console.log(fruitList)   

// const fruitList = [0,1,2,3,4,5,6]

console.log(fruitList[1])
console.log(fruitList.length);

fruitList[0]= "Grapes"
console.log(fruitList);



// Array, Functions, and Objects
// Function - Declare, Invoke

console.log("Hello how are you?");
console.log("Hello how are you?");
console.log("Hello how are you?");
//same code here 

console.log("Hello how are you?");
console.log("Hello how are you?");
console.log("Hello how are you?");
//same code here 

console.log("Hello how are you?");
console.log("Hello how are you?");
console.log("Hello how are you?");
//same code here 


//Using multiple times we use Functions 
//function are used for resuble ()


function hello(){
    //logic
    console.log(" how are you?");
    console.log(" how are you?");
    console.log(" how are you?");
}
hello()
//same code 100 lines
hello()
// same code 100 lines
hello()


// Arrays, Functions and Objects
//params - when declare / define
//placeholder, local variables
//arugments - when invoke / call/run
//Use Variable/Values, Multiple Params, Underline

// function helloRon(){
//     console.log("hello Ron")
// }
// function helloEmma(){
//     console.log("hello Emma")
// }
// function hellodon(){
//     console.log("hello Daniel")
// }

// //greet Rom
// helloRon()
// //greet emma
// helloEmma()
// //greet dom
// hellodon()

const Ron = "Ron"
const Emma = "Emma"
const don = "Daniel"

function greet(name, study){
    console.log("my name is:"+ name+ " "+ study)
}
greet("srikanth");

//greet Rom
greet(Ron, "10th Class" );
//greet emma
greet(Emma, "12th intermediate");
//greet dom
greet(don, "Degree passed");


// Arrays, Functions and Objects
// return keyword
//default undefined , shortcuts, ignore after
//1 inch 2.5cm

// const width = 0;
// const height = 0;

// const dimension =[width, height];
// console.log(dimension)

const walHeight = 80;

function calculate(value){
    // const newValue = value + 2.54;
    // console.log("The value in cm is:"+ value+2.54+"cm")
    // return newValue
    return value *2.54;
}

const width =calculate(200);
const height = calculate(walHeight)

const dimension =[width, height];
console.log(dimension)




// function numberCalculate(num, num1){
//     // console.log("The value is calculated:" + " " +( num + num1))
//     // const newNumber = num+num1;
//     // return newNumber;
//     return num+num1;   

// }

// const firstValue = numberCalculate(50,50);
// const secondValue = numberCalculate(100,200);
// const result = [firstValue, secondValue] ;
// console.log(result)

// Function Expression
const Expression = function (num, num1){
    return num+num1;   
}

const firstValue = (50,50);
const secondValue = (100,200);
const result = [firstValue, secondValue] ;
console.log(result);


// objects -> Keys/Values pairs , Methods
// dot Notation

const person = {
    firstName: "Sandeboina",
    middleName: "Srikanth",
    lastName: "yadav",
    age: 26,
    education: "GIET (HYDERABAD)",
    married: false,
    address:{
        village: "Cherla anki reddy pally",
        mandal: "Chinna-kodur",
        dist: "Siddepet",
        state: "Telangana",
        pincode: "502267",
        geo:{
            lat: "-32458",
            lon: "58679",
        },
    },
    myFriends: ["Naresh", "sairam", "pavan", "sai"],
    greeting: function(){
        console.log("Welcome to person data ")
    },


};

// console.log(person);
console.log(person.middleName);
console.log(person["firstName"]);
console.log(person.address.geo.lat);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.greeting());
console.log(JSON.stringify(person));
console.log(JSON.parse('{"firstName":"Sandeboina","middleName":"Srikanth","lastName":"yadav","age":26,"education":"GIET (HYDERABAD)","married":false,"address":{"village":"Cherla anki reddy pally","mandal":"Chinna-kodur","dist":"Siddepet","state":"Telangana","pincode":"502267","geo":{"lat":"-32458","lon":"58679"}},"myFriends":["Naresh","sairam","pavan","sai"]}'));


// Conditional Statements
// >, <, >=, <=, ==, ===, !==, !===

const value1 = 2 > 1;
// console.log(value1)

if(value1){
    console.log("Hello Everyone");
}else {
    console.log("Heyyyyyyy");
}


// Comparison operators
// >, <, >=, <=, ==, ===, !==, !===
// else if anf !

const val = false;

if(!val){
    console.log("Hey iam opposite")
}



const num1 = 1;
const num2 = 10;

if (num1 > num2){
    console.log("First number is greater than second number");   
}else if(num1 >= num2){
    console.log("Both are equal")
}else{
    console.log("Second number is greater than First number"); 

}

// == checks only values 
// === checks values and type

// const num_1 = 10;
// const num_2 = 10;

// const values1 = num_1 == num_2 ;    // true
// const values2 = num_1 === num_2 ;   // true

// console.log(values1)
// console.log(values2)


// const num_1 = 10;       // type= number
// const num_2 = "10";     // type = string

// const values1 = num_1 == num_2 ;    // true
// const values2 = num_1 === num_2 ;   // false

// console.log(values1)
// console.log(values2)

 
// const num_1 = 10;
// const num_2 = 20;

// const values1 = num_1 != num_2 ;    // true
// const values2 = num_1 !== num_2 ;   // true

// console.log(values1)
// console.log(values2)


const num_1 = 10;
const num_2 = "20";

const values1 = num_1 != num_2 ;    // true
const values2 = num_1 !== num_2 ;   // true

console.log(values1)
console.log(values2)


// Logical Operator
// ( || - OR),   (&& - And), !

const userName = "Emma";
const age =30;

if(userName === "Emma" && userName !== "23" ){
    console.log("Correct Values")
}else{
    console.log("Wrong Values")
}

// if(userName === "Emma" || userName === "Ron" ){
//     console.log("Heyy how are you!!!")
// }else{
//     console.log("Wrong Values")
// }

*/
//----------------------------------------

// switch  - (Redux)
// Dice Values: 1-6

const dice = 1;

// Switch
switch(dice){
    case 1:
        console.log("you got one");
        break;
    case 2:
        console.log("you got two");
        break;
    case 3:
        console.log("you got three");
        break;
    case 4:
        console.log("you got four");
        break;
    case 5:
        console.log("you got five");
        break;
    case 6:
        console.log("you got six");
        break;
    default:
        console.log("You didn't rool the dice 😎")
}


// else if
if (dice ===1){
    console.log("You got one");
}
 else if(dice === 2){
    console.log("You got two");
} 
else if(dice === 3){
    console.log("you got three");
}
else if(dice === 4){
    console.log("you got four");
}
else if(dice === 5){
    console.log("you got five");
}
else if(dice === 6){
    console.log("you got six");
}
else{
    console.log("You didn't not roll the dice");
}


// if
// if (dice ===1){
//     console.log("You got one");
// }if(dice === 2){
//     console.log("You got two");
// }if(dice === 3){
//     console.log("you got three");
// }if(dice === 4){
//     console.log("you got four");
// }if(dice === 5){
//     console.log("you got five");
// }if(dice === 6){
//     console.log("you got six");
// }if{
//     console.log("You didn't not roll the dice");
// }




// Loops 
// Repeatedly run a block of code while condition is true
// while loop

// while(false){
//     console.log("Executing");
// }

let amount = 10;

while(amount >0){
    console.log("I have  " + amount + " " + " doolars to go for shopping")
    amount --;    // amount = amount - 1;
}


// do-while loop
// Code block first, Second Condition
// Runs at least

let money = 8;

do{
    console.log("You have " + money +" " +  "dollars" );
    money++;
    console.log("eheyy");
}while(money < 10);


// for Loop
// for (Initialization, Condition, Increment/Decrement)

let i;

// for (i=0; i<=10; i++){
//     console.log("The number is: " + i)
// }


for (let number=10; number >=0; number--){
    console.log("The number is: " + number)
}

//=========================================================================================
//=========================================================================================
// Advanced js


// 1. String methods
// String properties and Methods
// Wrapper String Object, Don't Memorize Methods

let text = "Srikanth Sandeboina";

// String is object 
console.log(text.toLowerCase());
console.log(text.toUpperCase());

let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.charAt(1));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("S"))
// console.log(text.startsWith("Srikanth"));
console.log(text)
console.log(text.trim());
console.log(text.trim().toLowerCase().startsWith("srikanth"));
console.log(text.includes("kanth"))
console.log(text.toLowerCase().includes("boina"));
console.log(text.slice(0,8));
console.log(text.slice(-1));


// Template Literals - Es6+
// Backticks Characters `` 
// Interpolation ${} - Insert Expression value

const firstName ="Emma";
const age = 27;

const sentance ="She is "+ firstName + " "+ "and age is "+ age +" "+ "Years old";
console.log(sentance)

const value = `Hey it's ${firstName} she is ${age} years old. math cal ${3*5} `;
console.log(value);



// Array properties & methods

let fruitsNames =["apple","banana", "cherries","orange", "blueberries"];

//length
console.log(fruitsNames.length);
console.log(fruitsNames[fruitsNames.length-1])

//concat
const firstNames =["Emma","Ron","Daniel"];
const allNames = fruitsNames.concat(firstNames);
console.log(allNames)

// reverse
console.log(allNames.reverse());

//push
allNames.push("blackberries");
allNames.push("grapes");
console.log(allNames)

//pop
allNames.pop();
allNames.pop();
console.log(allNames)

//unshift
allNames.unshift("Strawberries");
allNames.unshift("promagranete");
console.log(allNames)

//shift
allNames.shift()
allNames.shift()
console.log(allNames)


//Arrays and for loop

const firstname = ["Emma", "Ron", "Daniel", "Harry", "Potter"];
const lastname = "whatson";

const newArray = [];

//for loop
// for (initialization  condition  increment/decrement)

for (let i = 0; i < firstname.length ; i++) {
    // console.log(i)
    // console.log(firstname);

    // const fullname = `${firstname[i]} ${lastname}`;
    // newArray.push(fullname);

    newArray.push(`${firstname[i]} ${lastname}`);
}
console.log(firstname)
console.log(newArray)


// Functions , return, if, array, for loop, Objects

const gas =[20,40,50,100];
const food = [30,50,30];

function calculateTotal(arr){
        let total =0;
    for(let i=0; i< arr.length ; i++){
        // console.log(i)
        // console.log(arr[i])
        total += arr[i];       // total = total + arr[i]
    }
    if(total >100){
        console.log(`Heyy your spending too much money`);
        return total;

    }
    {
        console.log(`Heyy man total is less than 10`)
        return total;
    }
    // console.log(total)
    // return total;
}
// calculateTotal(gas)

let gasTotal = calculateTotal(gas);
let foodTotal = calculateTotal(food);
let randomTotal = calculateTotal([1,2,3,4,5,6,7,8,9,10]);

console.log({
    gas:gasTotal,
    food:foodTotal,
    randam:randomTotal,
})

// console.log(gasTotal);
// console.log(foodTotal);
// console.log(randomTotal);



// Reference vs value
// Primitive data types -> string, number, symbol, boolean,undefined, null
// non-primitive data types -> Arrays , functions, objects = object
// typeOf

// 
// 1. when assigning primitive data type value to a variable any changes
// are made directly to that value, without effecting original value.

// 2. when assigning non-primitive data types value to a variable is 
// done by reference so any changes will affect all the references.

// 

let number1 =10;
let number2 = number1;
number2 = 20;
console.log(`The first number is: ${number1}` );
console.log(`The second number is: ${number2}` );


let person1 = { name: "emma"};
// let person2 = person1;
let person2 = {...person1};
person2.name = "Harry"
console.log(`The first name is: ${person1.name}`);
console.log(`The second name is: ${person2.name}`);


// Null and Undefined -> Both represents no value

//undefined -> "Javascript cannot find value for this"
// variable without value
//missing functions aruguments
// missing object properties

// Null - "Developer sets the value"

let numbers1 = 20 + null ;   // 20+ 0 
console.log(numbers1)

let numbers2 = 20 + undefined ;   // NaN
console.log(numbers2)


// Truthy and Falsy
// "", '', ``, 0, -0, NaN, false, null, undefined

const bool1 = true;
const bool2 = 2 > 1;

let Text = "srikanth"

if(Text){                       //Text !== ""
    console.log("Hey it is true")
}else{
    console.log("Hey it is false")
}


// if(bool1){
//     console.log("Hey it is working");
// }
// if(bool2){
//     console.log("Hey it is also working!!");

// }



// unary operator - typeOf
let texts ="some text"
// console.log(typeof text);    // operand
// binary operator - assignment
let num = 3;
let num2 = 2+5; 


// ternary operator
// condition ? (runs if true) : (runs if false)

let frstName = "srikanth";

frstName ?  console.log(`this is Truthy and name is ${frstName}`) : console.log(`this is falsy`);

// if(frstName){
//     console.log(`this is Truthy and name is ${frstName}`)
// }else{
//     console.log(`this is falsy`)
// }


// -----------------------------------------------------------


// Global Scope 
// any variable outside code block {} is said to be Global scope
// can be access anywhere in the program
// Gotchas : name collisions, modify by mistake
/*

var firstName = "Emma";
firstName = "Hary";

function calculate(){
    console.log(firstName);
    firstName = "orange";
   
}
calculate()
console.log(firstName)
console.log(`Hey this is ${firstName} and I'am awesome`)


if(true){
    console.log(firstName);
    firstName="Blackberry"
}
console.log(`Hey this is ${firstName} and I'am awesome`)


// //Local scope
// // Cannot be access from outside code blocks
// // if - NOT VAR

let firstNames = "Ran";

function local(){
    const firstNames ="Whatson";
console.log("this is local variable" +" "+ firstNames)
    boom="Daniel";

}
local()
console.log(`Hey this is ${firstNames}`);
console.log(boom);



// variable- lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2){
    const globalNumber = 20;
    const result = num1+ num2 + globalNumber;
    function multiply(){
        const globalNumber=100;
        const multiplyResult = result * globalNumber;
        console.log(multiplyResult)
    }
    multiply()

    return result;
}
console.log(add(4,3))


// Callback functions, Higher order functions, Functions as first Class Objects/Citizens
//1.Functions are first class citizen - stored in a variable (expression),
// passed as an arugument to another function, return from the function closure.

// 2.Higher order functions - accept another function as arugument or returns another function as a result

//3.Callback Function - passed to another function as an arugument and excecuted inside the function

// function greetMorning(firstName){
//     const myName = "srikanth";
//     console.log(`Good Morning ${firstName} , my name is ${myName}`)
// }

// function greetAfternoon(firstName){
//     const myName = "srikanth";
//     console.log(`Good Morning ${firstName} , my name is ${myName}`);

// }
// greetMorning("Emma")
// greetAfternoon("Daniel")



function greet(firstName){
    const myName = "srikanth";
    console.log(`Good Morning ${firstName} , my name is ${myName}`)
}
greet("harry");
greet("potter")


//==================================================================

*/