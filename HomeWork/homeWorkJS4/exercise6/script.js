    firstName = ["Michael ","Kobe ","Lebron "];
    lastName = [" Jordan"," Brayant"," James"];

    console.log(firstName[0]+lastName[0] +`\n`+ firstName[1]+lastName[1]+ `\n`+ firstName[2]+lastName[2]);

function fullName(num) {
    
    var full=[];
 for(i=0; i < num.length; i++){
     full.push(firstName[i] + lastName[i]);
    }
    return full;

}
console.log(fullName(firstName , lastName));