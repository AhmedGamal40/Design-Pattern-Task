// 1- Creational Desing Pattern => a- Constructor Desing Pattern (used when classes)

class Preson{
    constructor(fName,lName){
        this.fName = fName ,
        this.lName = lName
    }
    PresonFullName(){
        console.log(`Full Nme : ${this.fName} ${this.lName}`)
    }
}

// const person1 = new Preson('Ahmed' , 'Gamal')
// person1.PresonFullName()

class User extends Preson{
    constructor(fName, lName , id, year){
        super(fName,lName),
        this.id = id,
        this.year = year
    }
    userInfo(){
        console.log(`Full Nme : ${this.fName} ${this.lName} , and The ID : ${this.id} , Year : ${this.year}`)
    }
}

const user1 = new User('Ahmed' , 'Gamal' , 1566 , 2000)
user1.userInfo()