
function myFun(){
    let x = document.getElementById("heading");
    x.innerHTML = `<h1>Hello world</h1>`;
    // x.innerText = `<h1>Hello world</h1>`;

}
//---------------------

document.getElementsByClassName("btn")[0]
.addEventListener("click", function(){
    document.getElementsByClassName("list-items")[0].style.color ="red" 
    document.getElementsByClassName("list-items")[1].style.fontFamily ="Monospace,Arial"
    document.getElementsByClassName("list-items")[1].innerHTML ="Hello People. Welcome to Guvi";


    let listItem = document.getElementsByClassName("list-items");
    console.log(listItem)

    let lengthItem = listItem.length;
    console.log(lengthItem)

    for(let i=0; i<listItem.length; i++){
        listItem[i].style.color="green";
        listItem[i].style.fontSize="20px";
    }
})

//---------------------

// select list element
let liElement = document.getElementsByTagName("li");
console.log(liElement);

let firstElement = liElement[0].innerHTML="srikanth";
console.log(firstElement);

//append

// querySelector

let ulliElement = document.querySelectorAll("ul li");
console.log(ulliElement)
//-------------------------
/*
Create 3 Buttons
All Employee
male Employee
Female Employee

create a search Input 
search an employee with the help of unique para
firstname,lastname,email
 */

let employees = [
    {
      id: 1,
      first_name: "Suresh",
      last_name: "Kumar",
      email: "suresh@gmail.com",
      gender: "male",
      ip_address: "160.192.178.23",
    },
  
    {
      id: 2,
      first_name: "Sourav",
      last_name: "Das",
      email: "sourav@gmail.com",
      gender: "male",
      ip_address: "160.192.168.23",
    },
  
    {
      id: 3,
      first_name: "Jhansi",
      last_name: "Das",
      email: "jhansi@gmail.com",
      gender: "female",
      ip_address: "160.192.128.23",
    },
  
    {
      id: 4,
      first_name: "John",
      last_name: "Paul",
      email: "john@gmail.com",
      gender: "male",
      ip_address: "160.192.198.23",
    },
    {
      id: 5,
      first_name: "Lavish",
      last_name: "paul",
      email: "lavish@gmail.com",
      gender: "male",
      ip_address: "160.192.148.23",
    },
  
    {
      id: 6,
      first_name: "Sourav",
      last_name: "Paul",
      email: "sourav@gmail.com",
      gender: "male",
      ip_address: "160.192.128.23",
    },
    {
      id: 7,
      first_name: "Sangeetha",
      last_name: "Paul",
      email: "sangeetha@gmail.com",
      gender: "female",
      ip_address: "160.193.178.23",
    },
  
    {
      id: 8,
      first_name: "Pavan",
      last_name: "Sai",
      email: "pavan@gmail.com",
      gender: "male",
      ip_address: "160.172.178.23",
    },
    {
      id: 9,
      first_name: "Pavni",
      last_name: "Das",
      email: "pavni@gmail.com",
      gender: "female",
      ip_address: "160.162.178.23",
    },
    {
      id: 10,
      first_name: "Jenny",
      last_name: "Paul",
      email: "jenny@gmail.com",
      gender: "female",
      ip_address: "160.182.178.23",
    },
  ];

  function allEmpFun(){
    let allEmployee = document.getElementById("all-emp-btn");
    let bodyData = document.getElementById("body-data");
    allEmployee.append(bodyData)
  }
