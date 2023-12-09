//Loop:= repeatedly execute the statement .
/*
IN JS THERE ARE 5 TYPES OF LOOPS.
1.for loop
    for(initialization,condition,incr/decre){
        statement
    }

    // var a = 12;
// while(a<20)
// {
//     console.log(a);
//     a++;
// }


2.while loop
 while(condition){
    statement;
    incr/decrem;
 }  
 
 var a = 12;
while(a<20)
{
    console.log("hey");
    a++;
} 
while(a< 15)

 3. do-while loop:=
    do(condition){
    statement;
    incr/decrem;
    while(condition)
 } 
4. for-in loop
 * for in loop was only works on object.
 * they iterate the key value pair in object.
 */

// var obj = {
//     name : "Shree",
//     age : 22,
//     place : "Universe"
//  }
//  for(var key in obj){
//     console.log(key);
//     console.log(obj[key]);
//     console.log(key,obj[key]);
//  }


/*
5. for-each loop:-
only execute with an array.
its main motive is to traverse/iterate the array element one by one
*/
var a =[1,2,3,4,5,6,7,8,9]
a.forEach(function(val){
    console.log(val);
})
