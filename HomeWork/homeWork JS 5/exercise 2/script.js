let newList = document.getElementById("myNum");
let num = [2,5,7,11,22];


    function printAll(list,item){
        item.innerHTML = "";
        item.innerHTML+="<ul>";
        for(let myNum of list){
        item.innerHTML+=`<li>${list}</li>`;
    }
        item.innerHTML+="</ul>";
}
    

printAll(num, list);

function sum(suma) {
    let zbir = 0;

    for(i=0; i < suma.length; i++){
        zbir = zbir + suma[i];
    }
    return zbir;
}
document.write(` The sum is ${sum(num)}`);