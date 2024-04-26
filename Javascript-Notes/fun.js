console.log("Hello");
console.log("3"/"5");
console.log(typeof 100);
console.log(typeof undefined);
console.log(typeof typeof undefined);
console.log(typeof [1,2,10]);

// Types of Declaration
// var     (Function scope)         Re-assign  ✅     Re-declaration   ✅  
// let     (block scope)            Re-assign  ✅     Re-declaration    ❌
// const   (block scope)          Re-assign  ❌     Re-declaration   ❌

var name ="yeshwanth";
var name="pavan"   //Re-declaration
name ="srikanth"   // Re-assign or initialization
console.log(name)


let name1 ="yeshwanth";
name1 ="srikanth"   // Re-assign or initialization will work
console.log(name1)

const fun =  "Keerthana";
console.log(fun)

//--------------------------------------------------------------------------------------------------

// scope: (Life time variables)      

{
    // let quote =`live more worry less 😀`;         // quote is not defined
    var nicequote = "Be good Do good 🎉🎉";
}
// console.log(quote);  //❌ 
console.log(nicequote); //✅


function beautiful() {
    let quote = `Live more worry less 🤩`;
    var niceQuote = "Be good Do good 🎉🎉";
    console.log(quote);    //✅   
    console.log(niceQuote);//✅    
}
beautiful()
//console.log(quote);    //❌   
//console.log(niceQuote);//❌ 
//---------------------------------------------------------------------------------------------------

// if Statements:

if(5>4){  // 5>4 condition
    //block scope 1
    let x= 10;
}else{
    //block scope 2
    console.log(x)   //❌
}


if(5>4){  // 5>4 condition
    //block scope 1
    var x= 10;
}else{
    //block scope 2
    console.log(x)   //✅
}

for(let i=0; i<array.length;  i++){

}

function DrivingTest(age){
    if(age > 18){
        var msg ="Eligible";
    } else {
        var msg ="Not Eligible"
    }
    console.log("You Driving test is" +"  "+ msg)
}
DrivingTest(20);  
//------------------------------------------------------------------------------------------------


// TypeCasting & Coercion
// 1)Implicit Coercion
var x1 = 3;    
var x2 = "5";
console.log(x1 +x2);  // 3 convert to string "3" then = "3"="5"=  "35"  // 3+"5"   here + prefers string concatenation 
console.log(x1-x2);   // "5" convert to number 5 then = 3-5 = -2        // minus its only to substract

// 2)Explicit Coercion
var x1 = 3;    
var x2 = "5";
var x3 = 8;
console.log(x1 + parseInt(x2));
console.log(x1 + +x2);
console.log(x1+x2+x3);
//----------------------------------------------------------------------------------

// we have to understand that how arrays will store the data
var t1 = [200, 400];    // these is t1 =x1 address
var t2 = [200, 400];    // these is t2 =x2 address   they look like same but they are not same.
var t3 = t1;
// Array & objects are compared by Address
console.log(t1 === t2);
console.log(t3 === t1);


var t1= [200, 400]; 
var t2= [200, 400];
var t3= t1;    //copy by reference (address)
t1.push(70);
t2.push(100);
t3.push(20);
console.log(t1);
console.log(t2);
console.log(t3);


var t1= [100,200];
var t3=t1;
t1.push(400);
console.log(t1)
console.log(t3)

var r1=[100,200];
var r2=[...r1];         // copy by value
var r3=[80,...r2,400,500]
console.log(r2)
console.log(r3)
//--------------------------------------------------------------------------------------------------

//types of Function:
function double(n){
    return  n*5
}
console.log(double(4));


function sum(a, b){
    return a+b;
}
console.log(sum(5));
console.log(sum(5,20));


function doubleAndSum(a,b){
   return sum(double(a), double(b))
}
console.log(doubleAndSum(10, 20))
//-----------------------------------------------------------------------------------------------------

//2.Arrays Destructuring:
//only if t3 is undefined Default value will be taken. 

// const [t1,t2,t3=80]=[100,200,500]; //array   
// console.log(t1,t2,t3) // 100 200 500

// const [t1,t2,t3=80]=[100,200,null];  
// console.log(t1,t2,t3)  // 100 200 null     // null is value

// const [, t1,t2,t3=80]=[100,200,null];  // ,Holes or skip
// console.log(t1,t2,t3) // 200 null 80

// const [t1, ,t2,t3=80]=[100,200,null];  // ,Holes in middle
// console.log(t1,t2,t3) // 100 null 80

//Object Destructuring:

// const {house,power,networth:Net,skill=['genius','billionaire','playboy',123]} ={
//      name1: "Tony Stock",
//      house: "🏠",
//      networth: "money",
//      power: "💪",
//      phrase: "love you 3000",
//      skill:null
  
//   }
//      console.log(house,power,Net, skill);


//spread operator
// var [t1,t2,t3]=[100,200,300,400,500];
// console.log(t1,t2,t3);

// collecting the values is rest operator & spreading the values is spread operator...

// var [t1,t2,...t3]=[100,200,300,400,500,'srikanth']; //rest of values will be stored in array 
// console.log(t1,t2,t3);

// var t4=[10,20,...t3,40,50];
// console.log(t4)
// -------------------------------------------------------------

/*
//Array methods:
// const nums = [1,2,3];
// const resNums= nums.map((n)=>n*2);
// console.log(nums, resNums);

const avengers=[
  'Hulk',
  'Iron man',
  "Black Widow",
  "Captain America",
  'Spider man'
]
// console.log(avengers.join('|'))

for (var i=0; i<avengers.length; i++){
  console.log(avengers[i].length)
}

//converted to Array of string -> array of number.
const letterCount = avengers.map((n)=>n.length);
// console.log(letterCount);

//Array of numbers -> array of boolean
const isGreaterThan10 = letterCount.map((len)=>len>=10);
// console.log(isGreaterThan10);


//filter:

//It always return 
console.log(letterCount);

// const onlyLongerThan10 = letterCount.filter((l)=>l>=10);
// console.log(onlyLongerThan10);

console.log(avengers);

const filterNames =avengers.filter((name)=>name.length>=10);
console.log(filterNames);

//reduce
const IntialValue=0;
const total = [1,2,3].reduce((sum,curr)=>sum+curr, IntialValue);
console.log(total);

*/


// ====================================================================
//Task
// const scores = [
//   {
//     marks: 32,
//     name: "Yvette Merritt"
//   },
//   {
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//   {
//     marks: 22,
//     name: "Mccall Carter"
//   },
//   {
//     marks: 21,
//     name: "Pate Collier"
//   },
//   {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   },
//   {
//     marks: 20,
//     name: "Hatfield Hodge"
//   }
// ];

// const printNames = scores.map((n)=>n.name);
// console.log(printNames);

// const isPass = scores.filter((p)=>p.marks>=40);
// console.log(isPass)


// const failedStudents = scores.filter((m)=>m.marks<=40);

// const failedNames = failedStudents.map((stu)=>stu.name).map((name)=>`Hello ${name}`);
// console.log(failedNames);


//find avarage 
/*
const allmarks = scores.map((num)=>num.marks);
console.log(allmarks);

const totalMarks = allmarks.reduce((sum , curr)=>sum+curr);
console.log(totalMarks);

const noOfStudents = scores.length;

const average = totalMarks/noOfStudents;
console.log(average)

// const average =totalMarks/scores.length;

const roundedAvgMarks =Number(45.42857142857143).toFixed(2);
console.log(average, roundedAvgMarks)
*/


//topper name
// const topperName = scores.map((mark)=>mark.marks);
// console.log(topperName);

// const highest = scores.filter((l)=>l.marks>=90).map((n)=>n.name);
// console.log(highest)

// const topper = scores.reduce((winner, stu)=> winner.marks > stu.marks ? winner: stu);
// console.log(topper.name)

// ------------------------------------------------------------------------------------------------------

// const globalNumber =5;

// function add(num1,num2){
//   const globalNumber=40;
//   const result = num1+num2+globalNumber;
//   console.log(result)
//   function multiple(){
//     const globalNumber=50;
//     const MultiplyResult=result * globalNumber;
//     console.log(MultiplyResult);

//   }
//   multiple();
//   return result;

// }
// console.log(add(10,20))























