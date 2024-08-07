// principles of dependency injection
// can date in code more dynamicly 

class Agyncy{
    constructor(name){
        this.name = name
    }
    getAgencyName(){
        console.log(`the Agency name is : ${this.name}`)
    }
}

class Country{
    constructor(country){
        this.country = country
    }
    getCountryMade(){
        console.log(`the Country made is : ${this.country}`)
    }
}


class Car{
    constructor(agency , country){
        this.agency = agency
        this.country = country
    }
}


// let agency = new Agyncy('Agyncy1')
// let country = new Country('China')

let agency = new Agyncy('Agyncy2')
let country = new Country('Egypt')

let car = new Car(agency , country)

car.agency.getAgencyName()
car.country.getCountryMade()