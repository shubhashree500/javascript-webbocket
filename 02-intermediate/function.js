/*
Function:-
definition:=A javaScript function is a block of code designed to perform a particular task. 
*/

// function sayName(){
//     console.log("g");
//     console.log("i");
//     console.log("t");
//     console.log("a");
// }
// sayName();
// sayName();
//sayname= reference
//():=Execution.


// function addTwoNumber(Num1,Num2){   //parameter
//     console.log(Num1 + Num2)
// }
// addTwoNumber(8,6);   //here 8 and 6 are called arguments
// addTwoNumber(8,"a");


// function addTwoNumber(number1, number2){
//     let result= number1 + number2;
//     return result;
// }

// const result= addTwoNumber(3,6);
// console.log("result:",result);

// function loginUserMessage(username){
//     return ${username} just logged in
// }
// console.log(loginUserMessage());

// ex5
// function loginUserMessage(username= rally){
//     if(!username)
//     {
//         console.log("please enter your username")
//         return
//     }
//     return `${username} just logged in`;
//  }
//  console.log(loginUserMessage("subash"));

// ex6
// function calculatePrice(num1){
//     return num1;
// }
// console.log(calculatePrice(200));

// function calculatePrice(...num1){    
//                 // ... rest operator
//     return num1;
// }
// console.log(calculatePrice(200,300,400));

// function calculatePrice(val1,val2,...num1){    
//     // ... rest operator
// return val1;
// }
// console.log(calculatePrice(200,300,400));

const user = {
    username : "gift",
    price : 400,
    location : "Khordha"
}
function handelObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price} and location is ${anyObject.location }`);
}
handelObject(user);


