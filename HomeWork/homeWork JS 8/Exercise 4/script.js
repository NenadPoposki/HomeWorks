$(document).ready(function(){

    function avg(){
        let input1 = $("input:first").val();
        let input2 = $("input:nth-child(2)").val();
        let input3 = $("input:last").val();
        let average = 0;
        average += (Number(input1) + Number(input2) + Number(input3)) / 3;
        if(average>=10){
            $("button").after(`<h1></h1>`);
            $("h1:first").text(`${average}`).css("color", "green");
        }
        else{
            $("button").after(`<h1></h1>`);
            $("h1:first").text(`${average}`).css("color", "red");
        }
    }

    $("button").click(function(){
        avg();
    })
    
});