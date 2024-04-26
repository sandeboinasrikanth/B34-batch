/*
//oop :Object Oriented Programming:
class never a part of javascript before recent time part of javascript always we preferred Functions
rather than class.

//class
//js -paid good money
//java -they also learned js
//java - tc39 -class

// class(JS) != class(JAVA)
// class(JS) -> functions

// class is the Blueprint


//Lets say i want a car
Name                  wheels        doors       engine
Ferrai                 4             2           v8
venue                  4             4           v3
Bmw x6                 4             4           v6
Toyoto landcruiser     4             5           v8

//car - blueprint
//model -object (The model that we create is an object)[ferrai, venue,Bmw]

// this =>this refers to object

//constructor is actually creating object when you call new the term method calls and 
finnaly that creates the object.
 
*/

// class is the blueprint, which can create different objects(model);
//class name start with Capital letter
class Car {
  constructor(name,wheels,doors,engine){
    //member variables - this.name,this.wheels
    this.name = name;
    this.wheels = wheels;
    this.doors = doors;
    this.engine = engine;
  }
}

//creating the object(car) - instantiating an object(ferrari)
// when we keep new keyword => it will calls constructor
// this.name =>key  & name =>value 
const ferrari = new Car ('ferrari',4,2,"v8");
const venue = new Car ('venue', 4,4,'V3');
const BMWx6 = new Car ('Bmw', 4, 4, 'v6');
const toyotoLandcruiser = new Car('LandCruiser', 4, 5, 'V8');

console.log(ferrari);    //Car {name: 'ferrari', wheels: 4, doors: 2, engine: 'v8'}
console.log(venue)
console.log(BMWx6)
console.log(toyotoLandcruiser , typeof toyotoLandcruiser);
// const ford = new Car("Ford",4,4,'v6',2014);
//-------------------------------------------------------------------------------------------------

//bank account=>name,accountNo,balance
//Bank Account:
// 1.Name
// 2.accno
// 3.balance

// Account - Class

class Account{
  constructor(name,accountNO,balance){
    //member variables
    this.name = name;
    this.accountNO = accountNO;
    this.balance = balance;
  }
  //class method or member function
  getBalance(){
    return `The balance is: ₹${this.balance}`;
  }

  withdraw(amount){
    if(this.balance >= amount){
      this.balance = this.balance - amount;
      return this.getBalance();
    }else{
      return `Insufficent Funds.${this.getBalance()} `;
    }
  }

  deposit(add){
    if(this.balance ){
      
    }
  }
}

const srikanth = new Account('srikanth', 101, 1_00_000);  //numeric seperate 50_000
const keerthana = new Account('pavan', 102, 2_00_000);
const nagraj = new Account('nagraj', 103, 1_50_000);

// console.log(srikanth, keerthana, nagraj);

// console.log(srikanth.balance)   // Avoid

// console.log(srikanth.getBalance())
// console.log(keerthana.getBalance())
// console.log(nagraj.getBalance())

//task1:withdraw

console.log(keerthana.withdraw(10_000))
// The balance is: 1_50_000

//Goes home
console.log(keerthana.getBalance());
// The balance is :150000

console.log(keerthana.withdraw(2_00_000));
//if she widthraw more money it show insufficent funds

console.log(srikanth.withdraw(10_000));
//-------------------------------------------

//task2:deposite

console.log(srikanth.deposit(20_000)) ;
//The balance is : 1,20,000



