/*
fetch: 
-> makes easier to write XHR requset
-> takes API as the parameter here

Fetch always returns promises data 
in the body we are getting the data inTerms of readable stream[packets of Data].
redable steam is packet of data
the result of the fetch is the promise
to access the value use one more .then()
to convert readable stream of data to json object we use .json()

Afer applying above method we get again a promise
use one more .then & .catch




*/

/*
var res= fetch("https://restcountries.com/v3.1/all");
console.log(res);
// res.then((data)=>data.json()).then((value)=>console.log(value)).catch((error)=>console.log(error));
res.then((data)=>data.json())
.then((value)=>{
    // console.log(value);
    result(value)
})
.catch((error)=>console.log(error))



function result(res){
    // for(var i=0; i<res.length; i++){
    //     console.log(res[i].flag)
    // }

    //i want to print all the countries in the  asian region?
    let countryAsianRegion = res.filter((ele)=>ele.region === "Asia");
    // console.log(countryAsianRegion);
    //print all the countryname, capital, flag, that comes under the asia region?
    countryAsianRegion.forEach((element)=>{
        console.log(`Country Name: ${element.name.common}       & Capital: ${element.capital}`);
    })
    //print the sum of the total population in the asia Region?
    let sumOf = countryAsianRegion.reduce((sum , curr)=>sum+curr.population,0);
    console.log(sumOf)
}



// map returns the output in an array
// the return type of forEach is undefined 
// forEach is alternative to for loop

//whenever if you have an array has an output,the apply[ Map ,filter,reduce,slice  ]

*/
// ------------------------

// Print the active, deaths, recovered, confirmed from the day 01 in console.

// const url = fetch("https://663cba7417145c4d8c376e00.mockapi.io/cases");
// console.log(url);

// url.then((data)=>data.json())
// .then((value)=>{
//     // console.log(value)
//     result(value);
// })
// .catch((error)=>console.log(error))


// function result(url){
//     // console.log(url)
//     url.forEach((ele)=>console.log(`ActiveCases: ${ele.active}     Deaths:${ele.deaths}     Recovered: ${ele.recovered}`));
 
// }

//-------------------------------------
//mock Api problems
//Read operation
const url = "https://663cca6717145c4d8c37ad38.mockapi.io/students";
fetch(url).then((data)=>data.json()).then((res)=>console.log(res)).catch((error)=>console.log(error));

