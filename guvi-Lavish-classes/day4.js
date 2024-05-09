/*
Asynchronous programming:to achieve program in asynchronous way
callback ->
what is callback?
How to create a callback Function?
What is a mechanism inorder callback?
  call stack, meassage queue , Event loop
  Callback Hell(pain of callback)

promises:
What is promise?
what are diff state in promises?
how to creation of object
promise chaining
Dependent promises
method under promises


Asyn/await => fetch, try, catch, finally using async and await approach using Api.

synchronous => In javascript, excecute the code line by line.
Ex: Dailing a call 
 vs 
Asynchronous => If any process or code that takes longer time, then it will run along the side.
                It will not affect the process coming after that.
Ex:
 crowdy Restaurant
 1.  5 meals
 2.  cup of tea - 2sec
 3. Pizza


 A Callback is way to achieve asynchronous programming in javascript.
 It is like function which is passed an arugument to Another Function.


 callStack


*/
/*
//Synchronous 
console.log("Making a Call");
console.log("Call RingingSound")
console.log("Call Connected")
console.log("Conversation Started ")
console.log("Conversation Ended")
console.log("Call Disconnected")

//Asynchronous
setTimeout(()=>{
  console.log("Making a call")
},1000);

setTimeout(()=>{
  console.log("Call RingingSound");
},3000);

setTimeout(()=>{
  console.log("Call Connected");
},4000);

setTimeout(()=>{
  console.log("Conversation Started");
},5000);

setTimeout(()=>{
  console.log("Conversation Ended");
},7000);

*/

const compute =(n1, n2, callback)=> callback(n1,n2);
const add = (n1,n2)=> n1+n2;
const sub = (n1, n2) => n1-n2;
// console.log(compute(1,2,add));
// console.log(compute(1,2,sub));


function greeting(name){
  console.log(`Hello ${name}.Welcome`)
}


function displayFullName(firstname,lastname,callback){
  const fullname = `${firstname} ${lastname}`;
  callback(fullname);

}

// displayFullName("John", "Doe", greeting);


// const arr = ["Apple", "Banana", "Orange", "Mango"];
// arr.map((item)=>{
//   console.log(item)
// })



function doSomething(callback){
  setTimeout(()=>{
    const data = ["Apple", "Banana", "Orange", "Mango","Straw Berrys"];
    // callback(true, data)
    callback( data)
  },3000);
}

const callback = (err,data) =>{
  if(data){
    console.log(data)
  }else{
    console.log(err)
  }

}

// doSomething(callback);


// function doSomething(callback) {
//   setTimeout(() => {
//     const data = ["Apple", "Banana", "Orange", "Mango", "Strawberries"];
//     const err = false; // Simulate no error
//     // const err = true; // Simulate an error

//     if (err) {
//       callback("Error occurred", null);
//     } else {
//       callback(null, data);
//     }
//   }, 3000);
// }

// const callback = (err, data) => {
//   if (err) {
//     console.error("Error occurred:", err);
//   } else {
//     console.log("Data received:", data);
//   }
// };

// doSomething(callback);


/*
1. Create a function Sum
2. Create a function Multi

Create a function that should take parameter with callback function and display the Data
*/



// multi(5,10,sum)

/*
Create 3 Functions
1. makeUpperCase()
2. reverseString()
    use above 2 as callback function
3. getData()

srikanth => SRIKANTH
HTNAKIRS
*/

function makeUpperCase(value){
  console.log(value.toUpperCase());

}

function reverseString(value){
  console.log(value.split("").reverse().join(""));

}

function getData(name, callback){
  const fullName = `${name}.Hi there`;
  // console.log(fullName);
  callback(fullName);


}

// getData("srikanth",makeUpperCase);
getData("srikanth",reverseString);


/*
Prepare a Pizza
1. Raise a Dough
2.RollDough
3.pur sauce
4.Add toppings
5.Bake pizza
6.Deliveray pizza
//pizza is Delivered successfully


callback Hell ->It is nesting of multiple independent
function inside another function
*/

// const time= 1000;

// //Raise a dough
// function raiseDough(callback){
//   console.log("Waiting a dough");
//   setTimeout(()=>{
//     console.log("Dough is ready");
//     callback();
//   },5*time);

// }

// //Rolling a dough
// function rollingDough(callback){
//   console.log("Rolling a dough");
//   setTimeout(()=>{
//     console.log("Dough is rolling");
//     callback();
//   },3*time);

// }

// //Pouring sauce
// function pourSouce(callback){
//   console.log("Pouring a Souce");
//   setTimeout(()=>{
//     console.log("Souce is Added");
//     callback();
//   },1*time);

// }

// //Add toppings
// function addToppings(callback){
//   console.log("adding toppings ");
//   setTimeout(()=>{
//     console.log("Toppings is added");
//     callback();
//   },2*time);

// }

// //Bake the Pizza
// function bakePizza(callback){
//   console.log("Baking a pizza");
//   setTimeout(()=>{
//     console.log("pizza is ready");
//     callback();
//   },8*time);

// }

// //Delivery pizza
// function deliveryPizza(callback){
//   console.log("Delivery a pizza");
//   setTimeout(()=>{
//     console.log("Pizza is Delivered");
//     callback();
//   },5*time);

// }


// //let's combine all functions and Nested them one inside another

// raiseDough(()=>{
//   rollingDough(()=>{
//     pourSouce(()=>{
//       addToppings(()=>{
//         bakePizza(()=>{
//           deliveryPizza(()=>{
//             console.log("Pizza is Delivered Successfully")
//           })
//         })
//       })
//     })
//   })
// })


/*
problem: 
      Display Countdown from 10 to 1 on the screen and then Display "Happy Independence Day..."
constraints:
      1.Don't use Named Functions
      2.Don't use set interval Functions
      3.Don't use recursion
      4.Don't use IIFE & named Functions.
      5.Don't use looping.
      6.use Call back hell to deploy the timer

*/

//callback ->Callback Hell
const countdown = document.querySelector(".countDown");
let time=10;
setTimeout(() => {
  countdown.innerText = time--;
  setTimeout(() => {
    countdown.innerText = time--;
    setTimeout(() => {
      countdown.innerText = time--;
      setTimeout(() => {
        countdown.innerText = time--;
        setTimeout(() => {
          countdown.innerText = time--;
          setTimeout(() => {
            countdown.innerText = time--;
            setTimeout(() => {
              countdown.innerText = time--;
              setTimeout(() => {
                countdown.innerText = time--;
                setTimeout(() => {
                  countdown.innerText = time--;
                  setTimeout(() => {
                    countdown.innerText = time--;
                    setTimeout(() => {
                      countdown.innerText = "Happy Summer Days....";
                    }, 1000);
                    setTimeout(() => {
                      countdown.innerText = "Happy Independence Day... ";
                    }, 5000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


//============================================

