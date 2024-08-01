// 2 - Behiveor Desing Pattern  => b - Strategy 
//  Strategy dp used to when request and response are different,

// EX1

class Fedex{
    //calculate logic
    calculate(){
        return "Total Price 500$"
    }
}
class MDP{
    //calculate logic
    calculate(){
        return "Total Price 600$"
    }
}
class UPS{
    //calculate logic
    calculate(){
        return "Total Price 700$"
    }
}

class ShoppingCompany{
    setShoppingCompany(companyName){
        this.companyName = companyName
    }
    calculateTotalPriceForAllCompany(detilesCompany){
        return this.companyName.calculate(detilesCompany)
    }
}



const firstOrder = {from : 'Cairo' , to : 'Alex' , time: '1 day'}
const fedex = new Fedex()
const ups = new UPS()
const shoppingCompany = new ShoppingCompany()
shoppingCompany.setShoppingCompany(ups)
console.log(shoppingCompany.calculateTotalPriceForAllCompany(firstOrder))