$(document).ready(function () {
    
    function Person(fullName, job, salary){
        this.fullName = fullName;
        this.job = job;
        this.salary = salary;
    }

    function sumOfSalaries(persons) {
        let sum = 0;
        for(let i of persons){
            sum += i.salary;
        }

        return sum;
    }

    var personsArr = [new Person("Nenad Poposki", "Physiotherapyst", 1000), new Person("Angela Poposka", "Anesthesiologist", 1000)];
    var sumResult = sumOfSalaries(personsArr);
    console.log(sumResult);
})