// EX2

class Payment{
    pay(amount){}
}

class Bank extends Payment {
    pay(amount){
        return `You are used Bank the services is ${amount}`
    }
}

class CreditCard extends Payment {
    pay(amount){
        return `You are used Credit Card the services is ${amount}`
    }
}

class Paypal extends Payment {
    pay(amount){
        return `You are used Paypal the services is ${amount}`
    }
}

class PaymentMathods{
    constructor(paymentServices){
        this.paymentServices = paymentServices
    }
    setPaymentServices(paymentServices){
        this.paymentServices = paymentServices
    }
    getPaymentServices(payAmount){
        return this.paymentServices.pay(payAmount)
    }
}

const bank = new Bank()
const paypal = new Paypal()
const paymentsevi = new PaymentMathods()
paymentsevi.setPaymentServices(paypal)
console.log(paymentsevi.getPaymentServices('500'))