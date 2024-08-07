// Single Responsibility Principle
// A class should have one and only one reason to change
// A class should have only one job

class Employee {
    constructor( name){
        this.name = name
    }
    returnThis(){
        console.log(this)
    }
}

class NameEmployee extends Employee{
    constructor(name){
        super( name)
    }
    returnName(){
        console.log(`the name of Employee is ${this.name}`)
    }
}

class AgeEmployee extends Employee{
     returnAge(){
       console.log(`the age of Employee is 24 years`)
    }
}

const emp1 = new NameEmployee('Ahmed')
emp1.returnName()

const emp2 = new AgeEmployee()
emp2.returnAge()



