$(document).ready(function () {
    let textInput = $("#textInput");
    let colorInput = $("#colorinput");
    let button = $("#btn");


function printHeader(text,col){
    if(text==""){
        button.after("<h3>Enter some text!</h3>")
    }
    else{   
        button.after(`<h1>${text}</h1>`);
        $("h1:first").css("color",`${col}`);
    }
}

button.click(function(){
    printHeader(textInput.val(),colorInput.val());
})

})