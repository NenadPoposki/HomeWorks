// First exercise

var year = prompt("Please enter your birth year:");


switch ((year -4)%12) {
    case 0:
         alert("in chinese Zodiac you are:\n RAT");
        break;
    case 1:
        alert("in chinese Zodiac you are:\n OX");
        break;
    case 2:
        alert("in chinese Zodiac you are:\n TIGER");
        break;
    case 3:
         alert("in chinese Zodiac you are:\n RABBIT");
         break;
    case 4:
        alert("in chinese Zodiac you are:\n DRAGON");
        break;
    case 5:
        alert("in chinese Zodiac you are:\n SNAKE");
        break;
    case 6:
        alert("in chinese Zodiac you are:\n HORSE");
        break;
    case 7:
        alert("in chinese Zodiac you are:\n GOAT");
        break;
    case 8:
        alert("in chinese Zodiac you are:\n MONKEY");
        break;
    case 9:
        alert("in chinese Zodiac you are:\n ROOSTER");
        break;
    case 10:
        alert("in chinese Zodiac you are:\n DOG");
        break;
    case 11:
        alert("in chinese Zodiac you are:\n PIG");
        break;

    default:
        alert("Please write a regular YEAR ");
        break;
}


// Exercise two

function num(a,b) {
    
    let c = a+b;
    console.log(c);
    console.log(typeof(c))
}
num(5, 4);  //Number


function undef(x, y, z) {
    
}
console.log(undef(4,5));  //Undeff


function str() {
    let newStr = "hello world"
    console.log(newStr);  
    console.log(typeof(newStr));
}
str(); //String



function obj(fullName) {
    
    fullName = {
        firstName: 'Nenad',
        lastName: 'Poposki'
    };
    console.log(fullName);
    console.log(typeof(fullName));
}
obj(); //Object



//Exercise three

function dog() {
    var dogAge = parseInt(prompt("Enter your dog years: "));
    var dogOld = dogAge * 7;
    console.log("Your dog is "+ dogOld + " years old");
    var humanAge = parseFloat(prompt("Enter your dog age:"));
    var humanDog = humanAge / 7;
    console.log("Your dog is "+ humanDog + " years");
}
dog();


//Exercise four

function boysGirls() {
    var boys = prompt("Enter number of boys");
    var girls = prompt("Enter number of girls");

    console.log(boys + " boys  " + girls + " girls");
}
boysGirls();


//Exercise five



function atm() {
    let cash = parseFloat(prompt("Please enter how much you want to cashout:"));
    let money = 200;
    leftMoney = money - cash;
    if(cash > money) {
        console.log("Not enough money");
    }
    else if (leftMoney <= 9) {
        console.log("You have: " + "0" +leftMoney+ " on your account");
    }
    else {
        console.log("You have: "+leftMoney+" on your account");
    }
}
atm();




