let Book = {
    title: prompt("Enter book title"),
    author: prompt("Enter book author"),
    status: prompt("enter reading status with, true or false"),
    readingStatus: function() {
        if(this.status == "true"){
            return console.log(` You still reading ${this.author}  from author  ${this.author}`);
        }
        else if(this.status == "false"){
            return console.log("You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.");
        }
        else {
            return console.log("Please enter valid status!")
        }

    }
   
}
 Book.readingStatus()
