let num1 = document.getElementById("a");
let num2 = document.getElementById("b");
let btn = document.getElementById("btn");
let para = document.getElementById("para");


function result(num1,num2) {
    let c = num1*num2;
   
    para.innerText = `the area is: ${c}`
}

function result1(num1,num2) {
    let c = 2*num1 + 2*num2;

    para.innerText = `the perimeter is: ${c}`;
}

btn.addEventListener("click", function() {
    let num1 = document.getElementById("a").value;
    let num2 = document.getElementById("b").value;
    result(num1,num2);
});

para.addEventListener("mouseover", function () {
    let num1 = document.getElementById("a").value;
    let num2 = document.getElementById("b").value;
    result1(num1,num2);
})

