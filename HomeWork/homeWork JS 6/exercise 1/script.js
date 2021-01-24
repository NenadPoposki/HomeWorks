let newName = document.getElementsByTagName("input")[0];
let newLastName = document.getElementsByTagName("input")[1];
let btn = document.getElementsByTagName("input")[2];

let lastD = document.getElementById("content");

function greeting() {
    lastD.innerText = `Wellcome:  ${newName.value} ${newLastName.value}`;
}

btn.addEventListener("click", function(event) {
    greeting(event.target.value);
});

lastD.addEventListener("mouseover", function() {
    lastD.innerHTML = "";
});


// function validateName(firstName,lastName,nameFirst,nameLast) {
//   if(firstName.length>nameFirst && lastName.length>nameLast){
//     lastD.innerHTML = `${newName.nodeValue} ${newLastName.nodeValue}`;
//   }
//   else {
//     lastD.textContent=`Your name should be ${nameFirst} and your ${nameLast} long`
//   }
// }

// button.addEventListener("click", function(event) {
//   validateName(newName.value, newLastName.value,2,3)
// })

// lastD.addEventListener("mouseover",function (event) {
//   event.target.textContent="";
// })
