$(document).ready(function() {
  

let textInput = $("#textInput");
let button = $("#btn");
let resultH = $("#result");

button.on("click",function (e) {
  resultH.text(`Hello there ${textInput.val()}`)
})

})


