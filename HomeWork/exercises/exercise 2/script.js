$(document).ready(function () {
    let account;
    let pin = $("#pin");
    let btn = $("#btn")
    let btn1 = $("#btn1").hide();
    let btn2 = $("#btn2").hide();
    let btn3 = $("#btn3").hide();
    let textInput = $("#textInput").hide();
    let h2 = $("#h2");

    function Account(pin) {
        this.pin = pin;
        this.balance = Math.floor(Math.random() * 1);


        this.deposit = function (amount) {
            this.balance += parseInt(amount);
        }

        this.withdrawal = function (amount) {
            this.balance -= parseInt(amount);
        }
    }
    
    btn.click(function () {
        if(!pin.val()){
            h2.text("Please insert pin");
            return;
        }

        h2.text("");

        account = new Account(pin.val());

        textInput.show();
        btn1.show();
        btn2.show();
        btn3.show();

        pin.hide();
        btn.hide();

    })

    btn1.click(function () {
        if(!textInput.val()){
            h2.text("Please insert amount")
            return;
        }
        h2.text("");

        account.deposit(textInput.val());
        h2.text(`Your balance is: ${account.balance}`)
    })

     btn2.click(function () {
        if(!textInput.val()){
            h2.text("Please insert amount")
            return;
        }
        h2.text("");

        account.deposit(textInput.val());
        h2.text(`Your balance is: ${account.balance}`)
    })

    btn3.click(function () {
        h2.text(`Your balance is: ${account.balance}`)
    })

 

})