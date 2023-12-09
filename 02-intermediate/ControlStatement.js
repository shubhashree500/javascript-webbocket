// control Statement
/* 
condition statemnt are those who create condition on whether you goes this side you goes another side like that
1.if- if condition true statement is true otherwise it will be false

if(condition)
{
    statement
}
*/
var a = 12;
if(a<18)
{
    console.log("they cant give vote");
}

/*
2.if-else:- if the condition is satisfied then the if block get executed otherwise the else block will be execute
if(condition)
{
    statement
}
else{
    statement
}
*/
var a = 20;
if(a%2 ==0){
    console.log("even")
}
else{
    console.log("odd")
}
/*
3. if else-if else-if else:=in that we can add multiple case simultaneously  to check the condition  where we get executed.
    
    //  if(condition)
    //  {
    //      statement
    //  }
    //  else if{
    //      statement
    //  }
    //  else {
    //      statement
    //  }
*/
        const balance = 1000;
        if(balance<5000){
            console.log("less than 500");
        }
        else if(balance<700){
            console.log("less than 700");
        }
        else{
            console.log("less than 1200");
        }

/*4. switch:=a part of js conditional statement where we execute different statement depends on the condition that they check.
     switch(condition){
     case : value
     break; 
      case : value
     break; 
      case : default
     break; 
        }
        */
        const month = "april";
        switch(month){
         case 1:
             console.log("January");
             break;
         case 2:
                 console.log("February");
                 break; 
         case 3:
             console.log("march");
             break;
         case 4:
                 console.log("April");
                 break;
         case 5:
                     console.log("May");
                     break; 
         case 6:
                 console.log("June");
                 break;   
         case 7:
             console.log("JULY");
             break;
         case 8:
                 console.log("August");
                 break; 
         case 9:
             console.log("SEPT");
             break;
         case 10:
                 console.log("OCT");
                 break;
         case 11:
                     console.log("NOV");
                     break; 
         case 12:
                 console.log("DECEMBER");
                 break;   
         default:
                     console.log("default case");
                     
        }
