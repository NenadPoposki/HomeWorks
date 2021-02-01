     let newArr = [0,2,5,4,6,8];

    function dashes(arr) {
        result = [];

        for(let i of arr){
            if(isNaN[i]){
                return false;
            }
        }
        for(let i = 1; i <= arr.length; i++){
            if (arr[i+1]%2==0 && arr[i]%2==0) {
                result.push(`-${arr[i]}`)
            }
        }
        return result;
    }
    console.log(dashes(newArr));