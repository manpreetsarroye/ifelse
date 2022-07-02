// var n=require("readline-sync");
// num=n.question("enter number: ");

// var i=1;
// var count=0;

// while (i<=num){
//     if (num%i==0){
//         count=count+1
//     }
//     i++
// }
// if (count==2){
//     console.log("its a prime number")
// }
// else{
//     console.log("its not prime")
// }
// var number1 = 44 * 30;
// let readlineSync = require("readline-sync");
// var number2=readlineSync.questionInt("enter a number");
// if(number2>=number2){
//    console.log("number2 is greater than or equal");
// }
// else{
//    console.log("number2 is lesser");
// }

// let readlineSync = require("readline-sync");
// var water=readlineSync.questionInt("enter water level");
// if (water<1){
//    console.log("more water needs to fill");
// }
// else if (water>=1 && water<=10){
//    console.log("no need to fill water");
// }
// else{
//    console.log("overflow");
// }
// let readlineSync = require("readline-sync");
// var varx=readlineSync.questionInt("enter a number")
// if(varx%2===0){
//    console.log("divisible hai")
// }
// else{
//    console.log("not divisible")
// }

var time = 6;
if (time >= 5 && time <= 6) {
 console.log("sleep well");
}
else if (time >= 6 && time <= 7) {
 console.log("Morning Exercise");
}
else if(time > 7 && time < 8.30){
 console.log("Break+Breakfast");
}
else if ( time > 8.30 && time < 12){
 console.log("Study");
}


var day = "TUeSday".toLowerCase();

if (day == "monday") {
  console.log("Dhanwantari\nSiddhi");
}
else if (day == "tuesday") {
  console.log("manu\nRoshni\nPooja\Priyanka\nnalini\nsoni");
}
else if (day == "wednesday") {
  console.log("Shrusti\Karuna");
}
else if (day == "thursday") {
  console.log("Nikita\nMona");
}
else if (day == "friday") {
  console.log("Pihu\Sejal");
}
else if (day == "saturday") {
  console.log("Gunjan\nShweta");
}
else if (day == "sunday") {
  console.log("Swati\nKhusboo");
}
else {
  console.log("Please enter valid week day")
}


var number1 = 44 * 30;
let readlineSync = require("readline-sync");
var number2=readlineSync.questionInt("enter a number");
if(number2>=number2){
   console.log("number2 is greater than or equal");
}
else{
   console.log("number2 is lesser");
}