//Dom -> Document Object Model
//HTML - HTML Parser - DOM
//CSS - CSS parser - CSSOM
//Js Engine manipulate html and css

console.log("welcome to Dom 😎")

//document let's access the DOM
// Read the dom and print on the console
console.log(document)
//dom methods
console.log(document.getElementsByTagName("h1"));
//HTMLCollection
const headings = document.getElementsByTagName("h1");
console.log(headings[0].innerText)
console.log(headings[1].innerText)

const coolElements =document.getElementsByClassName('cool');
console.log(coolElements[0].innerText)
console.log(coolElements[1].innerText)

console.log(document.getElementById("fun").innerText)   // id unique

// document.querySelectorAll -> selecting multiple elements
const headingsQuery = document.querySelectorAll("h1")
console.log(headingsQuery[0].innerText)
console.log(headingsQuery[1].innerText)

const coolHeadingsQuery = document.querySelectorAll(".cool")
// NodeList(2)
console.log(coolHeadingsQuery)
console.log(coolHeadingsQuery[0].innerText)
console.log(coolHeadingsQuery[1].innerText)

// querySelector -> selecting single elements
console.log(document.querySelector("#fun").innerText)


console.log(document.querySelector("h1:nth-child(2").innerText);

// getElementsByTagName, getElementsByClassName, getElementById, querySelector, querySelectorAll
// Features can be added | old features will not removed from web

// getElementsByTagName, getElementsByClassName, getElementById, -> .forEach will not work ❌
// querySelectorAll - .forEach ✅

document.querySelectorAll("h2").forEach((ele)=> console.log(ele.innerText));


//Edit (or) change the content
const repQuote = document.querySelector(".todo");
repQuote.innerText= 'Life is Short, have dessert first ⭐';
console.log(repQuote)

document.querySelectorAll(".todo").forEach((todo)=> {
    todo.innerText = 'Life is Short, have dessert first ⭐'
})

//Create the element
const beauty = document.createElement("h2");
beauty.innerText = "Don't let small minds convince you that your dreams are too big.";
console.log(beauty)

//element.append(child element)
// document.body.append(beauty)
// document.body.append(beauty)

// //use only js -clue -array
const favs = ["Badminton", "Chess", "Movies", "cricket", "Travelling"];

const favList = document.createElement('ul');

for(let fav of favs){
    // console.log(fav)
    const favItems = document.createElement('li');
    favItems.innerText = fav;
    favList.append(favItems)
}

// console.log(favList)
document.body.append(favList);

//adding Attributes
const userInput = document.querySelector('.username')
userInput.setAttribute("placeholder","Enter Your Name");
// userInput.setAttribute("type", "number");


// JS & CSS only images 
const landImages =[
    "https://wallpaperaccess.com/full/2703791.jpg",
    "https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg",
    "https://www.teahub.io/photos/full/1-12815_purplish-blue-landscape-wallpaper-purple-and-blue-landscape.jpg",
    "https://www.mattpaynephotography.com/images/xl/Red-Mountain-Pass-Colorado.jpg",
]

//create 4 images and add it to body
for(let landImg of landImages){
    const landscape = document.createElement('img');
    landscape.setAttribute('src', landImg);
    landscape.setAttribute('class','landscape-bg');
    // document.body.append(landscape)
}

// flag task
// https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca

let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    },
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    }
  ];
  
  

const div = document.createElement('div');
const div2 = document.createElement('div');


for(let country of countriesInfo){
    const flag = document.createElement('img');
    flag.setAttribute('src', country.flag);
    flag.style.width='300px';
    flag.style.height='200px';
    div2.appendChild(flag)

    const name = document.createElement('p');
    name.innerText =country.name;
    div2.appendChild(name)

    const population = document.createElement('p');
    population.innerText =country.population;
    div2.append(population);

    const region = document.createElement('p');
    region.innerText=country.region;
    div2.append(region)

    const capital = document.createElement('p');
    capital.innerText=country.capital;
    div2.append(capital)  
    
}

div.appendChild(div2)
// document.body.append(div);

console.log(div)

//-----------------------------------------------------




