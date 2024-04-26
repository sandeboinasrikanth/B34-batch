document.write('Learning Synchronous');

/*
//synchronous
console.log(" I");

console.log("eat ");

console.log(" ice cream ");

console.log(" with a");

console.log(" spoon ");

//Asynchronous
// setTimeout is a asynchronous function.
console.log(" I");

console.log("eat ");

setTimeout(()=>{
    console.log(" ice cream ");
},4000)

console.log(" with a");

console.log(" spoon ");

//1000 => thousand Milli seconds =>1sec
//3000 => three thousand Milli seconds =>3sec


//what are callback?
//function inside another function using arguments called callback

function one(call_two){
    console.log('step1 completed, please call step2');
    call_two()
}


function two(){
    console.log('step2')
}
// one(two) 


const order = (call_production)=>{
    console.log("order placed, please call the production");
    call_production()

}

const production = ()=>{
    console.log("Order recieved, starting production")
}
order(production)

//-----------------------------------------------------------
*/

/*
//  frontend => kitchen
// Backend  =>  fruits ,liquids, holders, toppings  
let stocks ={
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}
// console.log(stocks.fruits[2])

const order = (Fruit_name, call_production)=>{

    setTimeout(()=>{
        console.log(`${stocks.fruits[Fruit_name]} was selected`)
        call_production();
    }, 2000)



}

let production = ()=>{

    setTimeout(()=>{
        console.log("production started");

        setTimeout(()=>{
            console.log("The fruit as been chopped")

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(()=>{
                    console.log("The machine was started");

                    setTimeout(()=>{
                        console.log(`Ice Cream was selected on ${stocks.holder[0]}`);

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as toppings.`)

                            setTimeout(()=>{
                                console.log("Serve ice cream");
                            },2000)
                        },3000)
                    }, 2000)
                },1000)
            },1000)
        },2000)
    },1000);
    
}
order(0, production);

*/
//-----------------------------------------------------------


//promises

let stocks ={
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}

let is_shop_open = true;

let order = (time,work)=>{

    return new Promise((resolve, reject)=>{

        if(is_shop_open){
            resolve(work())
        }else{
            reject(console.log("Our shop is Closed"));
        }
    })
};