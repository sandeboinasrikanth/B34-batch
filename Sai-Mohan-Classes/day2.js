/*
What is the Promise?
What are the States of the Promises?
How to write the promise
Accessing the values
Promise Chaining
Promise.all()

=> To overcome callback hell scenario we need promise

promise:
A promise is an object which holds the result of asynchronous operation.

syntax: var p1 =new Promise();
here,
-> p1 is userDefined...it can be anything.
-> Inside the promise it takes a function as a parameter
-> the function has 2 parameters: resolve, reject
-> The output will be object

//states of promises:
Pending:
Fullfilled:
Rejected:

-> writing a function to return promises

-> To access the value inside the promise we use .then & .catch 

   .then -> is needed for the Resolved State
   .catch -> is needed for the Rejected State

   Promise.then((value)=>{
    console.log(value)
   }).catch((error)=>{
    console.
   })

-> if the promise is resolved , it will call .then(())
-> if the promise is rejected , it will call .catch(())

Chaining promises:
Depending asynchronous operation

promise.all([]); => It is going to take array of promises it will wait untill all the promises are resolved.
the output will be array resolved promises.

Promise.allSettled([]); => It is going to return a promise, that resolves after
                        all the promises (or) either resolve or rejected

*/
//------------------------------------------






// var p1 =new Promise((resolve, reject)=>{
//     resolve("the asyn oper is successfull");
//     reject("the asyn oper failure")

// });;
// console.log(p1);


// var age = parseInt(prompt("Enter the Age!!!"));

// //reading the input is the async operation
// var p1 =new Promise((resolve, reject)=>{
//    if(age>=18){
//     resolve("You are Eligible to vote")
//    }else{
//     reject("You are not Eligible")
//    }

// });;
// console.log(p1);


// function foo(){
//     return new Promise((resolve,reject)=>setTimeout(() => resolve("this is resolved after 3 secs"), 3000));
// }

// foo().then((data)=>console.log(data)).catch((error)=>console.log(error));




//Chaining promises:

// function foo(num){
//     return new Promise((resolve,reject)=>setTimeout(()=>resolve(2*num),3000));
// }

// function barData(num){
//     return new Promise((resolve,reject)=>setTimeout(()=>reject(12*num+" "+ "This is rejected"),3000));
// }

// //Display the result
// foo(5).then((data)=>{
//     console.log(data);
//     //foo(4)
//     return foo(data);
// }).then((data1)=>{
//     //foo(8)
//     console.log(data1)
//     return barData(data1)
// }).then((data2)=> console.log(data2)).catch((error)=>console.log(error))

//-------------------------------


/*
var p1 = new Promise((resolve, reject)=>{
    if(true){
        setTimeout(()=>resolve("Your Promise1 is Resolved!!!"),3000);
    }else{
        setTimeout(()=>reject("Your Promise1 is Rejected!!!"),3000);
    }
})


var p2 = new Promise((resolve, reject)=>{
    if(false){
        setTimeout(()=>resolve("Your Promise2 is Resolved!!!"),2000);
    }else{
        setTimeout(()=>reject("Your Promise2 is Rejected!!!"),2000);
    }
})

var p3 = new Promise((resolve, reject)=>{
    if(true){
        setTimeout(()=>resolve("Your Promise3 is Resolved!!!"),4000);
    }else{
        setTimeout(()=>reject("Your Promise3 is Rejected!!!"),4000);
    }
})

// p1.then((data)=>console.log(data)).catch((error)=>console.log(error));
// p2.then((data)=>console.log(data)).catch((error)=>console.log(error));
// p3.then((data)=>console.log(data)).catch((error)=>console.log(error));

Promise.all([p1,p2,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error));
Promise.allSettled([p1,p2,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error));

*/

var p1= new Promise((resolve, reject)=>resolve("This is resolved"));
var p2= new Promise((resolve, reject)=>reject("This is rejected"));

Promise.allSettled([p1,p2]).then((data)=>console.log(data)).catch((error)=>console.log(error));
