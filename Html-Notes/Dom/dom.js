
// we learned about -> 1. Read items

// Dom - Document Object Model
// HTML - html parsel - dom tree
// html,css are manipulated by javascript

// console.log(document)
console.log("Hi from Dom 🙋‍♂️")

//document lets you access the dom
// console.log(document.getElementsByTagName("h1").length);
console.log(document.getElementsByTagName("h1"));
const headings =document.getElementsByTagName("h1")
// Html Collections
console.log(headings[0].innerText);
console.log(headings[1].innerHTML);

const coolElements = document.getElementsByClassName("cool");
console.log(coolElements)
console.log(coolElements[0].innerText)
console.log(coolElements[1].innerText)

console.log(document.getElementById("fun").innerText)


const headingsQuery = document.querySelectorAll("h1");
console.log(headingsQuery[0].innerText)
console.log(headingsQuery[1].innerText)

const coolElementsQuery = document.querySelectorAll(".cool");
console.log(coolElementsQuery[0].innerText)
console.log(coolElementsQuery[1].innerText)

// querySelectorAll - multiple & querySelectorAll -single 
console.log(document.querySelector("#fun").innerText)

console.log(document.querySelector("h1:nth-child(2)").innerText)

// getElementsByTagName, getElementsByClassName, getElementById, querySelectorAll, querySelector (mobiles)
// features can be added | old features


// --------------------------------------------------------------------------------

// 2. how to Edit items:

// Nodelist - (user friendly)
// console.log(coolElementsQuery)

// querySelectorAll -> .foreach will work
// getElementsByTagName, getElementsByClassName, getElementById ->  .foreach not present



document.querySelectorAll('h2').forEach((ele)=>console.log(ele.innerText));

// document.querySelector(".todo").innerText = "Life is short, have dessert first. ⭐";

const repQuote = document.querySelector(".todo");
repQuote.innerHTML = "Life is short, have dessert first. ⭐"


document.querySelectorAll(" .todo:nth-child(even) ").forEach((todo)=>{
    // console.log(todo.innerText)
    todo.innerText =" Life is short, have dessert first. ⭐"
})
//--------------------------------------------------------------------------------------------------

// Create :
const beauty = document.createElement("h2");
beauty.innerText = "Don't let small minds convince you that your dreams are to big ";

console.log(beauty)

//element.append(child element)
document.body.append(beauty)
//dom way of selecting element
document.querySelector(".container").append(beauty)

// use only js 
const favs = [ "Badminton", "Chess","Movies", "Cricket", "Travelling"];

const favList = document.createElement("ul");

for( let fav of favs) {
    // console.log(fav)
    const favItem = document.createElement("li");
    favItem.innerText = fav;
    favList.append(favItem)
}

document.body.append(favList);


//input- setAttribute
const userInput = document.querySelector(".username");
// console.log(userInput, userInput.setAttribute)
userInput.setAttribute("placeholder", "Enter your Name 👨")


// img 
// const userImg = document.createElement("img");
// userImg.setAttribute("src", "https://wallpaperaccess.com/full/2703791.jpg");
// document.body.append(userImg);

// create 4 images in body
const landImages = [
    "https://wallpaperaccess.com/full/2703791.jpg",
    "https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg",
    "https://www.teahub.io/photos/full/1-12815_purplish-blue-landscape-wallpaper-purple-and-blue-landscape.jpg",
    "https://www.mattpaynephotography.com/images/xl/Red-Mountain-Pass-Colorado.jpg",
]


for (let landImg of landImages) {
    const landscape = document.createElement("img")
    landscape.setAttribute("src", landImg)
    landscape.setAttribute("class", "landscape-bg")
    document.body.append(landscape);

}














