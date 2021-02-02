$(document).ready(function () {
    let button = $("#btn");
    let myDiv = $("#myDiv");
    let num = $("#num");
    let para = $("#para");

    function getTodo(num) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/todos/${num}`,
            success: function(result){
                myDiv.append(`<p> ID: ${result.id}, TITLE: ${result.title}`);
                if(result.completed === true){
                    myDiv.append(`<p>Completed</p>`);
                }
                else {
                    myDiv.append(`<p>Not Completed</p>`)
                }
        }
        error: function (err) {
            console.log(err);
        }
    })
};

button.click(function () {
    getTodo(num);
})