

/*1.Why we use Js Functions?
=> Reusing & Reducing the line of code & we can call function anywhere we want to use

2)Terminology:
=>Functions & methods
=>Declaration & Defination
=>Aruguments & Parameters
=>Callback & Higher Order Functions


*/


function printMe(){
  console.log('printing...');
}
console.log(printMe())

//parameters, arugument
function printThis(param){
  console.log(param);
}
console.log(printThis('tapasss'))

//function expression
const printMeAgain=function(){
  console.log('This is function expression');
}
console.log(printMeAgain());


const printMeAgainWithParam = function (a,b){
  console.log(a,b);
}
console.log(printMeAgainWithParam(100,400));

//Return

function sum(a,b){
  let ret=a+b;
  return ret;
}
console.log(sum(10,20));


//Default parameter =>when you don't pass arugument or parameter to function the value will be undefined;
// to set parameter value default a=10;
function calc(a,b){
  return (2*(a+b));
}
console.log(calc(2,3));
console.log(calc(2));

function cal(a,b=0){
  return (2*(a+b));
}
console.log(cal(50));


//Rest parameter:The Rest parameter is something that allows a function to accept any number of aruguments.
//note:1)function defination has only one rest parameter 2)It should be last rest parameter
// Rest means rest of the things left

function collectTings(x, ...y){
  console.log(x)
  console.log(y)

}
console.log(collectTings(1.2,3,4,5,6,7,8,9,10));


//Arrow functions:
const add = (x,y)=>{
  return x+y;
}

//arrow function in one line is called syntatic sugar
const add1=(x,y)=>x+y;
console.log(add1(50,100));


//Nested functions:Putting functions inside another function is called closure;

function outer(){
  console.log('Outer Function');
   function inner(){
    console.log('Inner Function');
  }
  inner();
}
console.log(outer());


//function scope:
//1. variable define inside function will not be access outside the function.
//2. Function inside the scope can access anything and everything.

function doSomething(){
  let x=10;
  const y=20;
  var z=30;
  
  console.log(x,y,z);
}
console.log(doSomething())

//If you declare a variable outside the Function (global scope) you can access the values.
let x=10;
const y=20;
var z= 30;

function doSomething1(){
  return x+y+z;
}
console.log(doSomething1());



//Closures:
function outer(x){
  function inner(y){
    return x+y;
  }
  return inner;
}
let outerReturn = outer(10);


console.log(outerReturn(200));

//callback function:function are treated has (FIRST CLASS CITIZENS).
// function foo(bar){
//   bar();
// }
// foo(function(){
//   console.log('bar')
// });

// function named(){
//   console.log('bar1')
// }
// foo(named);

function foo(bar){
  if(itsNight){
    bar();
  } if(isDrinkOverCheckOnline){
    bar();
  }
}

//callback
function getCapture(camera){
  camera();
}
getCapture(function (){
  console.log('Canon')
});


//HOF=> Higher Order Function
//function that takes one or more function as a arugument and or return as a function as a value of it.
//function returns another function it called HOF.
//Arrays we use hof

// note:
//1.It takes one or more function as aruguments.
//2.It may return a function.

function returnFn(){
  return function (){
    console.log('returning');
  }
}
const fn =returnFn();
console.log(fn())



//increment
const data =[10,20,30]
function increArr(arr, n){
  let result = [];

  for (const ele of arr){
    result.push(ele+n);
  }
  return result;
}
const result = increArr(data, 5);
console.log(result);

//decrement

// const data=[10,20,30]
// function decre(arr, n){
//   let result=[];
  
//   for (const elem of arr){
//     result.push(elem-n)
//   }
//   return result;
// }

// const result = decre(data, 10);
// console.log(result)


//increment , decrement

function incr(num, pad){
  return num+pad;
}

function decr(num, pad){
  return num-pad;
}

function multi(num, pad){
  return num*pad;
}

// const data=[10,20,30];
function smartOperation(data, op, pad){
  let result = [];

  for (const ele of data){
    result.push(op(ele, pad));
  }
  return result;
}
const res = smartOperation(data, incr, 4);
console.log(res)

//hof used for Array methods like=> map,filter,reduce

data.filter((ele)=>{
  return ele>10;
})





//IIFE:
//The function when i am defining same time excecuting that is called IIFE.



//Recursion:Recursion means a function that refer or call itself.
//base condition 
function fetchWater(count){
  if(count === 0){
    console.log('no more water left');
    return;
  }
  console.log('Fatching water.....');
  fetchWater(count-1);
}
fetchWater(5)

















