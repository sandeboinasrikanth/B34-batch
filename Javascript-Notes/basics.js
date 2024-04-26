/*
ES6 Features introduced:
1 => let & const, Block scoping, 
2 => ` ` Template literal
3 => ... Spread Operator [Arrays & objects] 
4 => ... Rest operator [functions]
5 => Destructuring [arrays, object]
6 => Class 
7 => Arrow Function => 
8 => Promises
9 => Object property shortHand


Latest Es6+ new features :
1=> Numeric Separators  1_00_00_000
2=> Nullish Coalescing ??
3=> Optional Chaining ?.
*/
// ------------------------------------------------------------------------------------

// variables (var , let , const);
// 1. var  => Function scope    Re-assign  ✅  Re-declaration   ✅ 
// 2. let  => Block scope       Re-assign  ✅     Re-declaration    ❌
// 3.const => Block scope       Re-assign  ❌     Re-declaration   ❌
var company ="Guvi zen";
comapany= "zen portal";
var company = "Test variable";
// console.log(company)

let company1="guvi"
company1="zenclass"
// console.log(company1);

const company2="test variable";
// console.log(company2);
//--------------------------------------------------------------------------------------------
/*
//block scoping:
If you declare a variable inside(local) the function will not access outside the function.
If you declare a variable outside (global ) the function will be accessed inside  the function.
function can access  anything and everything inside . 

*/
function test(){
    if (true){
        var name= "var variable";
        let testvar= "let variable"; 
        const nm= "const variable";
        
      console.log(testvar)
      console.log(nm)
          
    }
    console.log(name)  
}
test()

//for loop:
//var 
for (var index=1; index<=5; index++){
    console.log("Inside loop", index);
}
console.log("Outside the loop", index);

//let
for (let index=1; index<=5; index++){
    window.console.log("Inside loop", index);
}

// var test =123;    // window.test   // window.document   //window  => Global variable
undefined            // test variable will store in window  
//---------------------------------------------------------------------------------------------

/*
// Spread Operators  & Rest Parameters

// Spread Operators => Objects, Arrays
// Rest Parameters  => Functions 
// spread operater and rest operator will work in assignment operator
// collecting the values is rest operator & spreading the values is spread operator...
// ex: var [t1,t2,...t3]=[10,20,50,100,500];

//Diff b/w spread operator  and rest parameter
=> spread operator is generally used for two things =>Objects ,arrays
   in order to overCome copy by reference issue we use them,
   and inorder to concate the both multiple objects,multiple arrays together we use spread operator.

*/


const user1 ={
    firstName:"srikanth",
    lastName:"yadav",
    age:25,
    city:"siddepet",
    pin:502267,
}
// const user2=user1;   //1013 => {}     // copy-by-reference => refernce is nothing but Address
// user2.city = "chennai";

//Object.assign => Inbuilt function
// const user2 = Object.assign({}, user1);  // 1014 will not affect in user1

// Object.assign({}, user1)  => spread operator
// const user2 ={...user1};  //1014 =>{}

// Object.assign({}, user1)     //  here {}=> Target  user1=> source |  source will copy to target
const user2 = Object.assign({ 
    country:"india",
    pin: 502267,
}, user1)



// Arrays
const arr1 = [32, 551,454, 98];
const arr = [65,68]
// const arr2 = arr1;
// const arr2 = arr1.concat([100])
const arr2 = [...arr, 100, 12,...arr1, 54, 90, 34];

arr2.push(658)
arr1.push(3241)
// console.log(arr2);
// console.log(arr1);

/*
// Rest parameters:
Rest parameter is something like a function which adds no of aruguments.
Function defination has only one parameter,it should be last parameter
Rest parameter data stored in = Array format

*/
// function
function sum (a, b){
    return a+b;

}
// console.log(sum(10,20))

function sum (num1, num2, ...nums){       // ... Rest parameters shows data in =>  Array Format.
    // console.log(nums)

}
// console.log(sum(10,20))
// console.log(sum(10,50,21))
// console.log(sum(10))
// console.log(sum(1,20,3,4,5,6,7,8))
// console.log(sum(10,20,30))


function sum (...nums){       // ... Rest parameters shows data in =>  Array Format.
    let sum=0;
    for (let i=0; i<nums.length; i++){
        sum=sum + nums[i]
    }
    return sum;

}
// console.log(sum(10,20))
// console.log(sum(10,50,21))
// console.log(sum(10))
// console.log(sum(1,20,3,4,5,6,7,8))
// console.log(sum(10,20,30))

function collectTings(...args){
  console.log(args)
}
collectTings(10,20,30,40,50,60,70,80,90,100);
collectTings(10);
collectTings(10,);
collectTings(10);


function sum(num1, ...nums){

  console.log(num1);
  let sum =0;

  for(let i=0; i<nums.length; i++){
    sum = sum + nums[i];
  }
  return sum;
}
console.log(sum(5,2,10));


//------------------------------------------------------------------------------------------------



// Array and Object Destructuring
// Destructuring
// Object Destructuring
const user4 ={
    name:"srikanth",
    age:25,
    dist:"siddepet",
    pin1:"502267"
}

// const Uname = user.name;
// const UCity = user.dist;
// const Upin1 = user.pin1;
// const {}=user;
const {name, dist, pin1} = user4;
// const {name:Uname, dist:UCity, pin1:Upin1} = user4;


// Array of objects:
const user5 = [
    { name:"Guvi", age:25, city:"chennai"},
    { name:"Zen", age:26, city:"Banglore"},
    { name:"Test", age:27, city:"maharastra"},
    { name:"Hello", age:28, city:"kerala"}
]
// print all cities
user5.forEach(function(u) {
    // console.log(u.city);
})

user5.forEach(function({name,city}) {
    // console.log(name, city);
})

user5.forEach(function({city:Ucity}) {
    // console.log(Ucity);
})

 //map
let user6 = [
    { name:"Guvi", age:25, city:"chennai"},
    { name:"Zen", age:26, city:"Banglore"},
    { name:"Test", age:27, city:"maharastra"},
    { name:"Hello", age:28, city:"kerala"}
]

// user = user5.map(function({city:Ucity}) {
//     console.log(Ucity);
// });
// console.log(user)


// Array destructuring:
const array= [21,55,85,90];
// const num1 =array[0];
// const num2 =array[1];
// const num3 =array[2];

const [num1, num2, num3, num4]= array;
// console.log(num1, num2, num3, num4);

const user7 = [
    { name:"Guvi", age:25, city:"chennai"},
    { name:"Zen", age:26, city:"Banglore"},
    { name:"Test", age:27, city:"maharastra"},
    { name:"Hello", age:28, city:"kerala"}
]

// console.log(user[0].city)

const [firstUser] = user7;
// console.log(firstUser)

const obj = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
          }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
        }
      }
]

// const lat =obj.address.geo.lat;
// console.log(lat);

//destructuring
// const { address:{geo:{lat}}} = obj;
// console.log(lat);


// obj.forEach((u)=>{
//     console.log(u.address.geo.lat)

// })

obj.forEach(({address:{street, geo:{lat}}})=>{
    // console.log(street, lat);

})
//---------------------------------------------------------------------------------


//object shorthand property
const company='Guvi';
const age=25;
const place='HYDERABAD'

const Obj={
  company,
  year:age,
  place,

}
console.log(Obj);

//-------------------------------------------------------------------------------

// Template literals
let comp = "Guvi"

// let greet = "Hello Students, \n";
// greet =greet + "    Welcome to" +comp + "\n";
// greet = greet + "    All the best for zen, \n \n";
// greet = greet +"Regards, \n"  
// greet =greet+ comp+"Team"  


let greet1 =`Hello Students,
    Welcome to ${comp='ECMAScript'}!,
    All the best for Zen class.
    
    Regards
    ${comp} Team`
console.log(greet1)

//--------------------------------------------------------------------------------------


//  Arrow Functions

// const printGuvi =function(){
//     console.log("Guvi")
// }
// printGuvi();

const printGuvi = () => console.log("Guvi")        // Arrow function 1sth method
printGuvi();


// const square = (num)=>{
//     return num * num
// }
// console.log(square(2))


const square = num => num * num              //Arrow function 2nd method
console.log(square(7))


const sum2 = (a, b)=> a+b;
console.log(sum2 (10,20))


// const arrayss =[1,2,3,4,5];
// arrayss.forEach( function(a)  {
//     console.log(a)                 //1 2 3 4 5
// });

const arrays = [1,2,3,4,5];
arrays.forEach(a => console.log(a));



/*  
const test = () => {
    console.log("guvi")      // guvi
}


const printGuvi = () => console.log("Guvi printing")      // Guvi printing

// not taking any parameter keep _ symbol if multile means we need to keep brakets ()
const printGuvi = _ => console.log("Guvi printing")
console.log(printGuvi(8))      


const square = num => num*num;
console.log(square(8))           // 64

const square = num => console.log(num);
console.log(square(4))                          // first 4 than undefined



*/


