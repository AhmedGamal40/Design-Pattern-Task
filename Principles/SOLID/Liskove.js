// L => Liskove Subsititution Principle
// It depends on the principle Inheritance

class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} is eating`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
    bark() {
        console.log(`${this.name} is barking`)
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    meow() {
        console.log(`${this.name} is meowing`)
    }
}


const dog = new Dog('Tommy')
const cat = new Cat('Garfield')

dog.bark()
cat.meow()