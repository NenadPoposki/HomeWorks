let container = document.getElementById("container");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById(`lastName`);
let email = document.getElementById("email");
let password = document.getElementById(`password`);
let button = document.getElementById(`button`);
let second = document.getElementById(`second`);



function printAll() {
    container.innerHTML += `<p> ${firstName.value} </p><p> ${lastName.value} </p><p> ${email.value} </p><p> ${password.value} </p>`;
}



button.addEventListener("click",function () {
    printAll(firstName,lastName,email,password);
    
} );