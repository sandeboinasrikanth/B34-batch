let maxCount = 100;
let smsTypeFun = ()=>{
    //get the value of text entered by user with length
    let textEnteredLength = document.querySelector("#text-area").value.length
    console.log(textEnteredLength);
    // select the span Tag
    let spanTag = document.querySelector("#chars");
    //get the remaining count
    let remainingCount = maxCount-textEnteredLength;

    spanTag.innerHTML =remainingCount;
   
}

// show password
function changePassword(){
    const passwordBox = document.querySelector("#pass-box");
    let theattribute=passwordBox.getAttribute("type");
    if(theattribute === "password"){
        passwordBox.setAttribute('type', 'text');
    }else{
        passwordBox.setAttribute('type', 'password');
    }
}

//like ,dislike logic
let likesCount=0;
let dislikesCount = 0;
let total=0;

function liked(){
    likesCount++;
    total++;
    document.querySelector("#likes").innerText=likesCount;
    document.querySelector("#total").innerText=total;

}

function disliked(){
    dislikesCount++;
    total++;
    document.querySelector("#dislikes").innerText=dislikesCount;
    document.querySelector("#total").innerText=total;

}

//letters task
let button = document.getElementById("btn");
button.addEventListener('click', function(){
    let word = document.getElementById("str").value;
    //calculate the length of word
    let count = word.length;

    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML=`<h1>${count}</h1>`
});


// Number Guessing Game
let y =Math.floor(Math.random()*10+1);

let guess =1;
document.getElementById("submitguess").addEventListener("click", function(){
    let x=document.getElementById("GuessField").value;

    if(x==y){
        alert("You guessed it right in "+guess+" guesses");
    }else if(x>y){
        guess++;
        alert("Your guess is too high")
    }else if(x<y){
        guess++;
        alert("Your Guess is too low")
    }
})


/*
create a user input form that contains below parameters
firstName id=fname
lastName  id=lname
email     id =email
age       id=age

submit

table layout:
firstName    LastName    Email     Age
*/

let list1=[];
let list2=[];
let list3=[];
let list4=[];
let n=1;
let x=1;

function addRow(){
    let addrowLine = document.getElementById("show");
    let newrow = addrowLine.insertRow(n)

    list1=[x]=document.getElementById("fname").value
    list2=[x]=document.getElementById("lname").value
    list3=[x]=document.getElementById("email").value
    list4=[x]=document.getElementById("age").value

    let cell1 = newrow.insertCell(0)
    let cell2 = newrow.insertCell(1)
    let cell3 = newrow.insertCell(2)
    let cell4 = newrow.insertCell(3)


    cell1.innerHTML=list1[x];
    cell2.innerHTML=list2[x];
    cell3.innerHTML=list3[x];
    cell4.innerHTML=list4[x];

}

