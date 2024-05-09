/*
//promises
What are Promises?
=>Promises are way to achieve asynchronous operation in js.


States of Promises?
1.Pending  =>   It is initial Stage => States where promises is neither fullfilled or Rejected.

2.Fullfilled  => Operation is Successfully completed , promise is fulfilled.

3.Rejected => Operation is failed , the promise is Rejected

Promises Constructor
new -> keyword
//creation of promise object
const promise = new promise(function(resolve, reject){

})
A callback used to initialize the promise. This callback is passed two arguments: 
a resolve callback used to resolve the promise with a value or the result of another promise, 
and a reject callback used to reject the promise with a provided reason or error.

Promises Chaining
then, catch, finally

Promises Method:
API =>
fetch,

*/

//create a promise consructor
// const doPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         const skills = ["HTML","CSS","JAVASCRIPT","REACTJS","NODE.JS"];
//         if(skills.length === 5){
//             resolve(skills)
//         }else{
//             reject("Something is Wrong");
//         }
//     }, 2000)
// });

// console.log(doPromise);

// then ->    used to collect (or) Print the result.
// catch ->   used to handle the error
// finally -> 

// Display the result or error
// doPromise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Finally");
// })

//----------------------------------------------------------------

// //create a promise object
// const value =5;

// const promiseObj = new Promise((resolve,reject)=>{
//     //Generate a random no using math.random() function
//     const random =Math.floor(Math.random()*10);
//     console.log(random)
//     //check if random & value are same or not.
//     if(random===value){
//         resolve("Hurray.You Guessed the Correct No:",random);
//     }else{
//         reject("Sorry.You Guessed the Wrong No:",random)
//     }

// })

// console.log(promiseObj)


// //Display the result or error
// promiseObj.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

//------------------------------------------------

/*
Promise.all Method
promise takes a list of promises as an array. It returns a promise result if all promises have been fullfilled  else
Any one promise get rejected it reject the whole result itself.
1.The method takes an array of promises and return a promise.
2.Resolve promises if all promises are fullfilled
3.If one of the promises gets rejected then it will reject all promises.
syntax:
Promise.all([Promise1,promise2, promise3, ..... ])
*/

// let roomClean = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Room is Cleaned");
//     }, 2000);
// })

// let removeGarbage = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject("Garbage is removed");
//     }, 3000);
// })

// let getThePrice = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(" won the price")
//     }, 1000);
// })

// // Promise chaining
// roomClean.then((result)=>{
//     console.log(result);
//     return removeGarbage;
// }).then((result)=>{
//     console.log(result);
//     return getThePrice;
// }).then((result)=>{
//     console.log(result);

// })

// let promiseAll = Promise.allSettled([roomClean, removeGarbage, getThePrice]);
// console.log(promiseAll);


//-----------------------------------------------

/*
1.Create a promises with the name given below
->doProject
->attendTechnicalRound
->attendHrRound

2.you have attended the all Rounds
-> Create Same using Promise Chaining
-> Create same using Promise.all and promise.allSettled Method 
*/


//promise Dependent with chaining
let doProject = new Promise((resolve, reject)=>{
    //doing the project
    let isProjectDone = true;
    if(isProjectDone){
        resolve('Project is Done')
    }else{
        reject('Project is not done')
    }
})

let attendTechnical = new Promise((resolve, reject)=>{
    //attending the technical interview
    let isTechnicalAttended = true;
    if(isTechnicalAttended){
        resolve("Technical Interview is Attended")
    }else{
        reject("Technical Interview is not Attended")
    }
})

let attendHrRound = new Promise((resolve, reject)=>{
    //attending the HR round
    let isHrRoundAttended = true;
    if(isHrRoundAttended){
        resolve("HR Interview is Attended")
    }else{
        reject("HR Interview is not Attended")
    }
})

// promise chaining
doProject.then((msg)=>{
    let theMsg = `${msg}, `;
    attendTechnical.then((msg)=>{
        theMsg += `${msg}, `;
        attendHrRound.then((msg)=>{
            theMsg += `${msg}`;
            console.log(`${theMsg}, Finally You have cleared All the Rounds`)
        }).catch((msg)=>{
            console.log(`${msg}`)
        }).catch((msg)=>{
            console.log(`${msg}`)
        }).catch((msg)=>{
            console.log(`${msg}`)
        })
    });
});

// using promise.all method
const promiseCollection = Promise.allSettled([
    doProject,
    attendTechnical,
    attendHrRound
])

promiseCollection.then((msg)=>{
    console.log(`${msg}`);
    console.log("All Promises are Resolved...")
}).catch((error)=>{
    console.log(`${error}`);
    console.log("All Promises are Rejected...")
});

//==================
