let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let age = document.getElementById("age");
let button = document.getElementById("btn");
let ulList = document.createElement("ul");
let myDiv = document.getElementById("container");
myDiv.appendChild(ulList);
let students = [];

function Student(fName, lName, age){
    this.studentFirstName=fName;
    this.studentLastName=lName;
    this.studentAge=age;
}

function showStudents(){
let student = new Student(firstName.value, lastName.value, age.value);
students.push(student);
    for(let i = 0; i < 1; i++){
        ulList.innerHTML += `<li>${firstName.value} ${lastName.value} ${age.value}</li>`
    }
}


button.addEventListener("click", showStudents);