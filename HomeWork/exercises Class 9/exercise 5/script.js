let input = document.getElementById("input");
let btn = document.getElementById("btn");
let select = document.getElementsByClassName("select");
let para = document.getElementById("p");



btn.document.addEventListener("click", function () {
   para.innerText = "";
   if(!input.value){
       para.innerText = "enter value";
       return;
   }

   let option = document.createElement("option");
   option.setAttribute("name",input.value);
   option.setAttribute("value",input.value);
   option.innerText = input.value;
   select.appendChild(option);

})