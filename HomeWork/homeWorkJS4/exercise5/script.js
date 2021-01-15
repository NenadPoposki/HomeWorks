let arr = [3,5,6,8,11];

function findMax(input) {
    let num = 0;
    let max = -Infinity;
    while(num < input.length){
        if(input[num] > max){
            max = Number(input[num]);
        }
        num++;
    }
    return max;
}

function findMin(input1){
    let num1 = 0;
    let min = Infinity;
    while(num1 < input1.length){
        if(input1[num1] < min){
            min = Number(input1[num1]);
        }
        num1++
    }
    return min;
}


var maxValue = findMax(arr);
var minValue = findMin(arr);
var sum = maxValue + minValue;
console.log(`Max value is: ${maxValue},\n Min value is ${minValue},\n The sum is: ${sum}`);