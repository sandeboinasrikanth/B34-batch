/*
what is Event?
Different Type of Events?
What is diff b/w setTimeOut vs setInterval fun
window vs document
couple of examples
------------
Event:performing actions like, clicking on button, reloading page, submition of form, cancelling button, 
changing something, pressing a key, moving your cursor one position to another.

->Events are happenning all over.....
->Events let us know something is triggering or happening;
onload
button, hover, presskey,    move mouse cursor onMouseOver,

entering a text input =>  onchange , onfocus
submit a form =>onsubmit
loading page = >onload, onUnload

onclick,onload, unblur, onresize

//Different Type of Events?
1.mouse -> onclick
2.keyboard ->keydown/keyup, keypress
3.form Events -> onchange, onfocus
4.Document/ window events    -> resize, reload, unload, load

clicks,keydowns => events
onclick, onKeydown => Event listners

//Event listners
onclick => click
onkeydown => key press
onscroll => scrolling
onMouseEnter => hovering over
on mouse leave => stop hovering over
 */

let maxCount = 100;
function smsTypeFun(){
    //get the value of the text entered by the user with length
    let textEnteredLength = document.querySelector("#text-area").value.length;
    console.log(textEnteredLength);
    //select the spanTag
    let spanTag = document.querySelector("#chars");

    //get the remaining count
    let remainingCount = maxCount - textEnteredLength;
    spanTag.innerText = remainingCount;

}
// --------------------------

function changePassword(){
    let passwordBox = document.querySelector("#pass-box");
    
    let theAttribute = passwordBox.getAttribute("type");

    if(theAttribute==="password"){
      passwordBox.setAttribute("type", "text");
    }else{
        passwordBox.setAttribute("type", "password")
    } 
}
// ---------------------------

let likesCount = 0;
let dislikesCount = 0;
let total = 0;

let liked=()=>{
    likesCount++;
    total++;
    document.querySelector("#likes").innerText=likesCount;
    document.querySelector("#total").innerText=total;

}

let disliked=()=>{
    dislikesCount++;
    total++;
    document.querySelector("#dislikes").innerText=dislikesCount;
    document.querySelector("#total").innerText=total;

}
//-------------------------------------

/*
What is diff b/w setTimeOut vs setInterval fun ?
=> These are two function that comes under web Api.
ex: you want for Restaurant
   cup of tea  => 1hr
   food = 30mins 
   juice, starter => ready food

   web Api

   setTimeout => runs your code only once after the timeout is completed.

   setInterval => we runs code / function repeatedly for each interval

 */

// 1s = 1000 milliseconds
setTimeout(()=>{
    console.log("I will Excecute After 5000 MilliSeconds")
},5000)

//another way
function displayData(){
    console.log("I will Excecute after 3000ms")
}

// let setTimer = setTimeout(displayData, 3000);

setTimeout(()=>{
    clearTimeout(setTimer)
},4000)

//setTimeout => web Api function that excecute your code only for once delay time is over.


//setInterval

let i=0;
let fruits = ["papaya","mangoes","oranges","pineapple","grapes"];

function displayFruit(){
    console.log(fruits[i]);
    i++;
}

let setTimers = setInterval(displayFruit, 1000);

setInterval(()=>{
    // clearInterval(setTimers)
    clearTimeout(setTimers)
}, 2000)



