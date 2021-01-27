let inputNum = parseInt(prompt("Please enter number: "));

function validateNum(num) {
    if(isNaN(num)){
        alert(`Please enter NUMBER`);
        return;
    }
    
    if (num > 0) {
        console.log(`${num} is positive number.`)
    }
    else if(num < 0) {
        console.log(`${num} is negative number.`);
    }
    // Moeto resenie bese bez poslednovo else num == 0
    else{
        console.log(`${num} is zero.`);
    }

    if (num%2 == 0) {
        console.log(`${num} is even number.`)
    }
    else{
        console.log(`${num} is odd number.`)
    }
}



// isto taka za number of digits ne go znaev voopsto

function numDigits(inNum){
   
    if(inNum == 0){
        return 1;
    }
    let counter = 0;
    while(inNum!=0){
        counter++;
        inNum=parseInt(inNum/10);
    }
    return counter;
}


console.log(validateNum(inputNum));
console.log(numDigits(inputNum));
