// let Animal = {
//     name: prompt("Enter the pet name:"),
//     kind: prompt("What kind is:"),
//     speak: "Hey Bro!",

// }
// console.log(`Dog of a kind ${Animal.kind} with name ${Animal.name} says: ${Animal.speak}`)
 

let Animal1 = {
    name: prompt("Enter the pet name:"),
    kind: prompt("What kind is:"),
    speak:function () {
        return this.kind + " " + this.name;
    }
}

let AnimalSpeak = Animal1.speak();
console.log(`${AnimalSpeak} says: Hey Bro`);
