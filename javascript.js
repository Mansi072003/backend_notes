//used by netflix ,paypal
//we can make real time mobile apps and gamesamd networking apps
//previously it run in browser but now it runs in node js
var n=2;
function square(num){
   var ans =num*num;
   return ans;
}
var square2=square(n);
var square4=square(4);
console.log(square2);
console.log(square4);


//first invoking fuction return ans is stored in square2 and the ans is 4
//second invoking function return ans is stored in square4 and the ans is 16

var x=7;
function getname(){
    console.log("Namaste javascript");
}
getname();
console.log(x);
//in phase 1 the javascript it give memory to all the variable and function and stores special keyword undefined for variable and give actual copy to fuctions there is no undefined thing on funciton 
//and if we are using arrow function it work as another variable and defined it as undefined not as acopy of function