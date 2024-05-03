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
// .then(response => response.json()).then((data)=>{console.log(data[136].name);}).catch((error)=>{console.log(error)});
//-------------------------


const fetchDataBtn = document.querySelector("#fetchdata");
const result = document.querySelector("#result");

//Get the data from Api and Set the content of the result div
async function getData(){
    result.innerText ="Loading...";
    try{
        //Fetch of the data
        const resp = await fetch("https://api.github.com/users/sandeboinasrikanth");
        const data = await resp.json();
        result.innerText = `${data.name} has ${data.public_repos} repos`;
        // result.innerText=JSON.stringify(data);
        result.innerText=data.name;
    } catch (error) {
        //Handle error here
        result.innerText="Error";
    }

}


//Add an Event Listener
fetchDataBtn.addEventListener("click", function(){
    getData();
})