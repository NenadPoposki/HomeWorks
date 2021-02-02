let button = document.getElementById("btn");
let myDiv = document.getElementById("myDiv");
let num = parseInt(prompt("Enter number: "));


button.addEventListener("click", function () {
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
    .then(response => {
        response.json()
        .then(data =>{
            let para = document.createElement("p");
            para.innerText = `ID: ${data.id}, TITLE: ${data.title}`;
            myDiv.appendChild(para);
            if (data.completed === true) {
                let para1 = document.createElement("p");
                para1.innerText = "Completed";
                para1.style.color = "green";
                myDiv.appendChild(para1);
            }
            else {
                let para2 = document.createElement("p");
                para2.innerText = "Not Completed";
                para2.style.color = "red";
                myDiv.appendChild(para2);
            }
        });
    })
    .catch(err=>{
        console.log(err);
    })
})