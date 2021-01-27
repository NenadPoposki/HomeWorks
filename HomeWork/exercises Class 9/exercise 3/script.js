let inputArr = [1,5,2,9,26];

function numInput(arr) {
    let even = [];
    let odd = [];

    for(let i of arr){
        if(isNaN(i)){
            console.log("Not all array members is numbers");
            return false;
        }
        else if(i%2 == 0){
            even.push(i);
        }
        else {
            odd.push(i);
        }
    }
    return [even, odd];
}

    let result = numInput(inputArr);
    console.log(result);
