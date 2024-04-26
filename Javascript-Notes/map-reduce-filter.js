/*
//Array methods:
array.push() will affect original array

//array.map()
1. It always returns copy of array [original array will not be affected] , 
2. It always input.length === output.length
3. Tranform data type(one data to another data type)
    const nums = [1,2,3];   //
    const resNums= nums.map((n)=>n*2);
    console.log(nums, resNums);
*/
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

//array => string
// array.join()
const avenger = [
    "Hulk",
    "Iron man",
    "Black widow",
    "Captain america",
    "Spider man",
    "Thor",
];
console.log(avenger.join())
console.log(avenger.join("|"))
console.log(avenger.join("🙍‍♂️"))
console.log(avenger.join("0000"))
//---------------------------------------------------------------------------

// array.Filter:
// 1. It always returns copy of array
// 2. It always input.length >= output.length
// 3. input data type === output data type 

console.log(letterCount)
// (len) => len>=10  => should be return boolean
const onlyLongerThan10 =letterCount.filter((len) => len>=10);        //
console.log(onlyLongerThan10)   // [ 11, 15, 10 ]


const filter=["🧔‍♂️🙍‍♂️", "👨‍🦰","👨‍🦱🙆‍♂️" ,"👨"].filter((g)=>g.length/2 ===1);
console.log(filter)     // [ '👨' ]

const filter1=[3,10,5,70,50].filter((g)=>g>8);
console.log(filter1)   // [ 10, 70, 50 ]


// task1
const avenger3 = [
    "Hulk",
    "Iron man",
    "Black widow",
    "Captain america",
    "Spider man",
    "Thor",
];

const onlyAvengersLongerThan10 = avenger3.filter((name)=>name.length>=10)
console.log(onlyAvengersLongerThan10);
//------------------------------------------------------------------------------

// Reduce:
// Array of numbers =>  number
// Array of anything => anything   (ex: object to number, number to string, boolean to number )
// const total = [1,2,3,4,5].reduce((sum, curr) => sum + curr, IntialValue );    
// const IntialValue = 0;

const total = [1,2,3,4].reduce((sum, curr) => sum + curr,0 );    //  IntialValue =0;
console.log(total)    //10


const totals = [1,2,3,4].reduce((sum, curr) => sum + curr );    //  IntialValue =1;
console.log(totals)    //10

const total1 = [1,2,3,4].reduce((sum, curr) => sum + curr,-20 );    //  IntialValue =-20;
console.log(total1)    //-10


//[1,2,3,4]
// const IntialValue =0;
// sum          curr          ReturnValue (sum +curr)
    // 0           1               1
    // 1           2               3
    // 3           3               6
    // 6           4               10

   
//-------------------------------------------------------------------

// for (performance) vs map(Readable)

// what makes the good quality code?
//5pillars
// Good quality code
// 0, 1s -> pc

// High quality code
// 1. Readability - 75% time trying to understand code
// 2. Maintainable -resuable-security
// 3. Extensible 
// 4. Testability  => testing engineers (they will able to test your code)
// 5. Performance  => 


// Note:
// Think about code for whome you are witing code ,if you writing for pc
// computer can understand only binary code 
// 0, 1s -> pc (we are writing code to communicating eachother, it should be readable, 
// it shoud understand for other, express your thoughts )

//developers job is think a lot ,read, understand code, 

// maintain the code for long time (good maintainble code remain long time)

// testing engineers (they will able to test your code)

//--------------------------------------------------------------------------------------------------------
/*

*/







 
  
