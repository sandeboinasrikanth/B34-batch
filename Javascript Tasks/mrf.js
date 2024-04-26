// Task-1 
 // Only use =>  map, reduce, filter

const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

  // [32, 57, 22]
  // Task 1
  // Print the name list - As an array
  // Expected Output
  // ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
  //  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]
  // Array of objects -> Array of string (Transform)

// console.log(scores)

// const getName = ({name}) => name
// console.log(scores.map(getName))

// // Array of objects -> Array of string (Transform)
// const scoreNames = scores.map((stu)=>stu.name)
// console.log(scoreNames)       //['Yvette Merritt','Lillian Ellis','Mccall Carter','Pate Collier','Debra Beard','Nettie Hancock','Hatfield Hodge']

// Array of object -> Array of number
// const scoreMarks = scores.map((stu)=>stu.marks)
// console.log(scoreMarks)         // [ 32, 57, 22, 21,91, 75, 20 ]

// array of object with Destructuring
// const scoreName = scores.map(({stu})=> stu.name)
// console.log(scoreName)       //['Yvette Merritt','Lillian Ellis','Mccall Carter','Pate Collier','Debra Beard','Nettie Hancock','Hatfield Hodge']

// ----------------------------------------------------------------------------------------------------------

  
  // Task 2
  // >=40 pass.. find those student that passed (Use array method)
  // Expected Output
  // [{
  //     marks: 57,
  //     name: "Lillian Ellis"
  //   },
  //     {
  //     marks: 91,
  //     name: "Debra Beard"
  //   },
  //   {
  //     marks: 75,
  //     name: "Nettie Hancock"
  //   }]
  
  // 1st method
  // const isPass =(score)=>score.marks >= 40;
  // const result = scores.filter(isPass)
  // console.log(result)


//  const stuPassed = scores.filter((score)=>score.marks >=40);
//  console.log(stuPassed)


//------------------------------------------------------------------------------------------------------------
  
  // Task 3
  //  Find all the names who failed the exams (Array methods)
  // Expected Output
  //   ["Yvette Merritt",
  //   "Mccall Carter",
  //   "Pate Collier",
  //   "Hatfield Hodge"
  // ];


  // first filter than map 
// const getName =(score)=>score.name;
// const isFail =(score )=>score.marks<40;
// scores.filter(isFail).map(getName);

// 1st method

// const failStudents = scores.filter((stu)=>stu.marks < 40 );
// // console.log(failStudents)
// const failedNames = failStudents.map((stu)=>stu.name);
// console.log(failedNames)

// 2method
const isFail = (stu)=>stu.marks<40;
const getName = (stu)=>stu.name;
const sayHello =(name)=>`Hello ${name}`;

console.log(scores.filter(isFail).map(getName).map(sayHello));


// 3rd method you can create many times may and filter 
// console.log("Dot Chain",
//  scores.filter((stu)=>stu.marks < 40 )
//  .map((stu)=>stu.name)
//  //[]
//  .filter
//  //[]
//  .map
//  //[]
//  )


// const a =scores.filter((stu)=>stu.marks<40).map((stu)=>stu.name);
// console.log(a)





  //------------------------------------------------------------------------------------------
  
  // Task 4
  // Find the Average marks
  //  41

  // 1st method
// const allMarks =scores.map((stu)=>stu.marks)
// console.log(allMarks)
// const totalMarks = allMarks.reduce((sum, mark)=> sum+mark )
// console.log(totalMarks/scores.length)
//avg = sum of Marks / No. of students 

// scores.length => no. of students

// 1st method another way
// const allMarks = scores.map((stu)=>stu.marks);
// console.log(allMarks)

// const totalMarks = allMarks.reduce((sum, mark)=>sum+mark );
// const noOfStudents = scores.length;

// const average  = totalMarks/noOfStudents;
// const roundedAverage = Number(average).toFixed(2)
// console.log(average, roundedAverage)
// //avg = sum of Marks / No. of students 


// 2nd method to solve with reduce
const totalMarks = scores.reduce((sum, stu)=> sum+stu.marks, 0);
// console.log(totalMarks)
const noOfStudents = scores.length;

const average  = totalMarks/noOfStudents;
const roundedAverage = Number(average).toFixed(2)
console.log(average, roundedAverage)


//InitialValue = 0
// sum              curr            ReturnValue(sum + stu.marks)
// 0            1st object(32)      32
// 32           2nd object(57)      89
// 89           3rd object(22)      111
// 111          4th object(21)      132     
// 132          5th object(91)      223
// 223          6th object(75)      298
// 298          7th object(20)      318

//--------------------------------------------------------------------------------------------------------
  
  // Task 5
  // Find the topper's name
  // Expected Output
  // "Debra Beard"

const topper = scores.reduce((winner, stu)=> winner.marks > stu.marks ? winner:stu);

console.log(topper.name)

