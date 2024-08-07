// Open / Close Principle 
// Open for extention , Close for modification
// add new code at any time but not update old code .

// Ex: Exam
class ChooseQuetions{
    constructor(quetion, options){
        this.quetion = quetion,
        this.options = options
    }
    printQuetions(){
        this.options.forEach((option, index) => {
            console.log(`${index + 1} - ${option}`)
        });
    }
}

class BooleanQuetions{
    constructor(quetion){
        this.quetion = quetion
    }
    printQuetions(){
        console.log("1- True");
        console.log("2- Fase");
    }
}

class TextQuetions{
    constructor(quetion){
        this.quetion = quetion
    }
    printQuetions(){
        console.log("Answer: ..........................")
    }
}

// and new class Quetions 
class RangeQuetions{
    constructor(quetion){
        this.quetion = quetion
    }
    printQuetions(){
        console.log("Max: ..........................")
        console.log("Min: ..........................")
    }
}

let quetions = [
    new ChooseQuetions("Builder Design Pattern is :" , ['Creational' , 'Structur' , 'Behavior']),
    new BooleanQuetions("Mixin Design Pattern is Creational ?"),
    new TextQuetions("What is the Design Pattern ?"),
    // add new
    new RangeQuetions("How many Desing Pattern ?")
]

function PrintExam(quetions){
    quetions.forEach((quetion) => {
            console.log(` - ${quetion.quetion}`);
            quetion.printQuetions()
        });
}

PrintExam(quetions)