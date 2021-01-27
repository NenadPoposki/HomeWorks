let arrSting = ["This","is","arrayOfStrings"];

function firstString(a, b) {
    for(let i of a){
        if (i.length > b) {
            return i;
        }
    }
    return console.log("The strings is not more than 10 characters");
}
console.log(firstString(arrSting,10));