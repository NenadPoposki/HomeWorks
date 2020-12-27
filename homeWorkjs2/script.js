// first exercise
var a = prompt("enter number:");
var b = prompt("enter number:");
var c = prompt("enter number:");
var d = prompt("enter number:");
var e = prompt("enter number:");

var total = Math.max(a,b,c,d,e);

if(total != 0){
    alert("the maximum number is: "+ total);
}

else {
    alert("please enter number!" + total);
}

// second exercise
var n = prompt("Please enter your name: ", "Nenad Poposki");

if (n != 0){
alert("hello I am " + n);
} 
else {
alert("Please enter valid name!");
}

// third exercise
var year = prompt("Please enter your birth year:");
var zodiac = (year -4)%12;


if(zodiac == 0) {
    alert("in chinese Zodiac you are:\n RAT");
}
else if(zodiac == 1) {
    alert("in chinese Zodiac you are:\n OX");
}
else if(zodiac == 2) {
    alert("in chinese Zodiac you are:\n TIGER");
}
else if(zodiac == 3) {
    alert("in chinese Zodiac you are:\n RABBIT");
}
else if(zodiac == 4) {
    alert("in chinese Zodiac you are:\n DRAGON");
}
else if(zodiac == 5) {
    alert("in chinese Zodiac you are:\n SNAKE");
}
else if(zodiac == 6) {
    alert("in chinese Zodiac you are:\n HORSE");
}
else if(zodiac == 7) {
    alert("in chinese Zodiac you are:\n GOAT");
}
else if(zodiac == 8) {
    alert("in chinese Zodiac you are:\n MONKEY");
}
else if(zodiac == 9) {
    alert("in chinese Zodiac you are:\n ROOSTER");
}
else if(zodiac == 10) {
    alert("in chinese Zodiac you are:\n DOG");
}
else if(zodiac == 11) {
    alert("in chinese Zodiac you are:\n PIG");
}
else {
    alert("Please write a regular YEAR ");
}
