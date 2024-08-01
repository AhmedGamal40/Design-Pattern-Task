class Car{
    constructor(engine , price , color){
        this.engine = engine,
        this.price = price ,
        this.color = color
    }
}

// class KIA extends BMW{
//     constructor(engine , price , color){
//         super(engine , price , color)
//     }
// }

class FactoryCar{
    constructor(typeCare){
        this.typeCare = typeCare
    }
    returnInfoCar(){
        switch (this.typeCare) {
            case "BMW":
                return new Car('1500' , '55000' , 'Red')
            case "KIA":
                return new Car('1400' , '35000' , 'Black')
        
            default:
                break;
        }
    }
}

const AhmedOrder = new FactoryCar('KIA')
console.log(AhmedOrder.returnInfoCar())

const AliOrder = new FactoryCar('BMW')
console.log(AliOrder.returnInfoCar())