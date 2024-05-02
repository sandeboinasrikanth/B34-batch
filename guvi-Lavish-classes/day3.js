/*  
// Recap of Dom Manupulation
Dom =>
what is node in Dom ? => node is nothing but element, collection of elements, 

diff b/w window and document
window => 
document => 

Recap of DOM ManipulationDOM=>NodeWindow and DocumentDOm Selector?
1.getElementById("")=>return=>id value
2.getElementsByClassName()=>array of element with the given class name
3.getElementByTag()=>html tagnamereturn an array of elements with given tag name
4.querySelectorall()=>this method used to find all html element with specified selector
                    (id,class name,value,type,attribute)collection of element
5.querySelector()=>select single elements

 */

/*
problem: 
1.User => create a input box with parameter like 
id , class , attribute

2.take a string as a input from user.

3.Calculate the length of string.

implement the same with the help of dom manupulation.
 */

document.querySelector("#btn").addEventListener("click", function(){
    let wordLength = document.querySelector("#str").value.length;
    console.log(wordLength);

    let output = document.querySelector(".output").innerHTML = wordLength;
    
})

/*
Guessing the no.

*/
function guessNumber(){
    let numberGuessing = document.querySelector("#guess-no");

    let count = numberGuessing.value.length;

    if(count <=5){
        alert("The number you guess is too low")
    }else if(count === 5){
        alert("The Number you guessed is equal ")
    }else if(count >=5){
        alert("The number you guessed is too high")
    }

    numberGuessing.innerHTML = count;
}

/* 
don't use single element in index.html

create a dropdown box where user should add a new country name everytime by click on add button

*/
// let countriesInfo = [
//     {
//       name: "India",
//       population: " 1,394,975,829",
//       region: "Asia",
//       flag: "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
//       capital: "New delhi",
//     },
//     {
//       name: "Germany",
//       population: "81,770,900",
//       region: "Europe",
//       flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
//       capital: "Berlin",
//     },
//     {
//       name: "United states",
//       population: "323,947,000",
//       region: "Americas",
//       flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
//       capital: "Washington D.C",
//     },
//     {
//       name: "Brazil",
//       population: "206,135,893",
//       region: "Americas",
//       flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
//       capital: "Brasilia",
//     },
//     {
//       name: "Iceland",
//       population: "334,300",
//       region: "Europe",
//       flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
//       capital: "Reykjavik",
//     },
//   ];

// let countryInfoContainer = document.createElement("div");
// countryInfoContainer.className = "container";

// console.log(countryInfoContainer);

// let countryName = document.createElement("h2");
// countryName.innerHTML= "India";




// table data



