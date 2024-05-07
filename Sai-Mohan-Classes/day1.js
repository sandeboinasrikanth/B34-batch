/*
Module:04 
Synchronous: sequence
Asynchronous: keep an hold  , Delay 
    setTimeOut() => it is an inBuilt Asynchronous function in javascript. 
    // 2parameters
    // setTimeout takes function as parameter and the amount of Time taking for Excecution.
// javascript is synchronous

blocking code:
holding the Excecution

Callback: Terminologys:
// call Stack -> it is basically going to track the excecution of your Function.
// The main agenda for call stack is to excecute the functions.
// and order

http://latentflip.com/loupe

WebApi:basically deals with handling of blocking code

callback Queue: who keeps the asynchronousFunction keeps in order

Event loop :middle person it will check whether call stack is empty
 if it is empty
It will push the functions inside the callback Queue.

Callback:
=> function which takes one more function as parameter,
   the function which is taken as parameter is nothing but callback.
=>Function inside Another Function.

ex:
var arr = [10,20,30,40,50];
var res = arr.map((ele)=>ele*2);
console.log(res)

*/

/*
//Synchronous:
console.log("App is Started");
//time consuming operation
setTimeout(()=>console.log("App is under development"),2000);
console.log("Fixing bugs!!!");
setTimeout(()=>console.log("App is under deployment"),2000);
console.log("App Completed, Welcome to Application");


//Last in fast out
var f1=()=>{     //f1 invokes f2
    f2();
    f3();
    console.log("Say Hello!!!");
}

var f2=()=>{
    console.log("Say Hi!!!!")
}

var f3=()=>{
    console.log('Say buy!!!')
}
f1();

//callback
var arr = [10,20,30,40,50];
var res = arr.map((ele)=>ele*2);
console.log(res)

function f1(){
    f2();
    function f2(){
        f3();
        function f3(){
            f4();
            function f4(){
                console.log('hello')
            }
        }
    }
}
f1()


function foo(names,saybye){
    console.log("Welcome to foo")
    //bar(names)
    saybye(names)  //callback
}

function bar(names){
    console.log("Welcome to bar Function!!!"+ names)
}


setTimeout(foo,2000,"john doe",bar);
//------------------------------------------------------------
*/


//Dom: 
//live Dom Viewer
//how to create element dynamically
// const div = document.createElement("div");
// div.innerHTML = "this is div";
// document.body.append(div);

//below the code is for repetative Dom
var div = createEle("div","class","main","this is div");
var p=createEle("p","class","main","This is paragraph");
var section = createEle("section","class","main","This is section");
var article = createEle("article","class","main","This is article");
document.body.append(div,p,section,article)



function createEle(tagname, attrname, attrvalue, content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML =content;
    ele.style.color="red";
    return ele;

}

//task
var label = labelCreate("label","for","email","Email");
var br1 = document.createElement("br");
var input = formCreate('input','type','email','id','email');
var br2 = document.createElement("br");

document.body.append(label,br1, input, br2);



function labelCreate(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerText = content;
    ele.style.color='green';
    return ele;
}


function formCreate(tagname,attrname,attrvalue,attrname1,attrvalue1, content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    ele.innerText = content;
    ele.style.color='green';
    return ele;
}

