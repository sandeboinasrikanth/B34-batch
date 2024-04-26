// this is my book

// this    -> refers to book
// "this " -> requires context (book)
// "this"  -> reference word

const student = {
    firstName:"Bhavana",
    lastName:"Pratyusha",
    fullName: function(){
        return `${this.lastName}, ${this.firstName}`;
    },

};
//this -> student
// until the function is called "this" does not point to anything

//student -> content
// Why you should think "this" is referring to student 
student.fullName();
console.log(student.fullName())

// context of "this" changed to student2 and print wasim madha
const student2 = {
    firstName:"Wasim ",
    lastName:"Madha",
    fullName: student.fullName,

};
// student2 - context - this is the context pointing tooo
console.log(student2.fullName())


const printFullName = function(){
    return this.lastName+ " , "+ this.firstName;

}
//no context
console.log(printFullName);

const student3 = {
    firstName:"Santhosh ",
    lastName:"singh",
    fullName: printFullName,

};
// student3 - context
console.log(student3.fullName())


// Manually providing (explicity) context
// 1. call
// 2. apply
// 3.bind
console.log(printFullName.call(student3))    //singh , Santhosh 
console.log(printFullName.apply(student))    //Pratyusha , Bhavana

// Task - difference
// 1. call
// 2. apply
// 3.bind

const introMsg = function (state, country) {
    return `${this.lastName}, ${this.firstName} is from ${state}, ${country}!!!`
}

const student4 ={
    firstName: "Sunil",
    lastName: "mishra",

}
//function.call(context, arg1, arg2, arg3....)
// arg1, arg2, arg3 - can be of any datatype
console.log(introMsg.call(student4, "MH", "India"));

//function.apply(context, [arg1, arg2, arg3....])
// arg1, arg2, arg3 - can be of any datatype
console.log(introMsg.apply(student4, ["MH", "India"]))


// bind always returns a new function 

const sunilIntroMsg =introMsg.bind(student4)

// const sunilIntroMsg = function (state, country) {
//     return `${this.lastName}, ${this.firstName} is from ${state}, ${country}!!!`
// }
    
console.log(sunilIntroMsg("KL", "India"))