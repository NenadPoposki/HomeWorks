 let testInput = [2, 5, ['a', 'b', 'c'], "sedc"];
 let testInput1 = [2, NaN , 7, ['a', 'b', 'c'], null, "sedc", 0];

 function result(arr) {
    let resultOutput = [];
    for(let i of arr){
        if(!!i){   // if(i) Toa mi bese prvicno resenie
            resultOutput.push(i);
        }
    }
     return resultOutput;
 }

 console.log(result(testInput));
 console.log(result(testInput1));