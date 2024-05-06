/*
Async & Await => Fetch, Try, Catch, Finally with Web Api having Async & Await Approach

CRUD Operation with MockApi
create, Read, Update, Delete
with HTTP

Async ->keyword ->using Async you can make a function asynchronous way.
Async return a promise.

Await -> It will Await untill the promise from async is collected sucess.


Async  ->  should be used or placed before the Function.
Await  ->  should be used before collecting the response.


fetch: WebApi or public api
fetch takes 2 parameters 
1.url
2.optional parameter

with fetch you can use .then 
.then -> To print the data
.catch -> to handle the error

      

*/

// const url = "https://restcountries.com/v3.1/all";
// fetch(url)
// .then(response => response.json())
// .then((data)=>{
//     console.log(data[136].name);
// })
// .catch((error)=>{
//     console.log(error)
// });
//-------------------------

/*
const fetchDataBtn = document.querySelector("#fetchdata");
const result = document.querySelector("#result");

//Get the data from Api and Set the content of the result div
async function getData(){
    result.innerText ="Loading...";
    try{
        //Fetch of the data
        const resp = await fetch("https://api.github.com/users/sandeboinasrikanth");
        const data = await resp.json();
        result.innerText = `${data.name} has ${data.public_repos} repos & bio is ${data.bio}.`;
        // result.innerText=JSON.stringify(data);
        // result.innerText=data.name;
    } catch (error) {
        //Handle error here
        result.innerText="Error";
    }

}


// //Add an Event Listener
fetchDataBtn.addEventListener("click", function(){
    getData();
})
*/
//------------------------------------------------

// //Build an html elements
// document.body.innerHTML=`<div class="heading-container">
// <h1>Brewary List</h1>
// <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRRWMAsL89N4WXnpAXc2QIBFrUFG-iwS-Jct--4W90yFvvBS-K4HxqgLSJkA&s" alt="icon" />
// </div>

// <div id="mainContainer" class="main-container"></div>
// `;

// //create a function to get the data
// const getData = async (data)=>{
//     try {
//         const data =await fetch("https://api.openbrewerydb.org/v1/breweries");
//         const brewerys =await data.json()
//         brewerys.forEach((brewery)=>{
//             displayData(brewery);
//         })
//     } catch(error){
//         console.log(error);
        
//     }
// }
// getData()

// const displayData=(obj)=>{
//     mainContainer.innerHTML +=`
//     <div class="container">
//         <h3>Brewery Name:<span>${obj.name}</span></h3>
//         <h4>Brewery type:<span>${obj.brewery_type}</span></h4>
//         <h6>Brewery address:<span>${obj.address_1}</span></h6>
//     </div>
//     `

// }

//=========================================

//Implementing data from CRUD operation

let url = "https://6637466a288fedf6937fe5d3.mockapi.io/users";

//Get the data from the Server(GET)
function getData(){
    fetch(url,{
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        },
    }).then((result)=>result.json())
    .then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error)
    });
}

getData();

//(POST METHOD) => send the data or create the data
function createData(){
    let data={
        "name":"Sandeboina Srikanth",
        "email":"sandeboinasrikanth@gmail.com"
    };
    fetch(url,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        },
    }).then((result)=>result.json())
    .then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
}

createData()

//(PUT) => Update Method
function updateData(){
    let data={
        name:"Vishwaraj",
        email:"vishwaraj12345@gmail.com",
    };
    fetch(url+"/1",{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        },
    }).then((result)=>result.json())
    .then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    });
}

updateData();

//DELETE method
function deleteData(){
    fetch(url+"/12",{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
    }).then((result)=>result.json())
    .then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    });
}
deleteData()

//----------------------------------------
/*
problem:
Create a crud operation with html,css,javascript
name,email,image of the user(faker.js)

1.Create a button that should user data from the form
2.Create Edit Button =>Update(PUT)
3.Create delete button=Delete/id


*/
