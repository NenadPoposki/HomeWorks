let newName = prompt("Please enter your name?");
let weigh = parseFloat(prompt("how much kg you want?"));


function chickenWeigh(arr) {
    
    let chicken = (weigh * 2);
    let firstPara = document.createElement("p");
    firstPara.innerText += `${newName} \n \n you choose ${chicken} chicken`;
    firstPara.setAttribute("class", "p");
    let firstDiv = document.getElementById("result");
    firstDiv.appendChild(firstPara);
    
}


chickenWeigh(weigh);


