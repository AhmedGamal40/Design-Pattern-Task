// 1 - creational Desing Pattern => b - singleton Desing Pattern (used when object)
// EX (1) :

let inetans = null
class ErrorsFile{
    constructor(path,time){
        if(inetans == null){
            this.path = path , 
            this.time = time ,
            inetans = this
        }else{
            return inetans
        }
    }
    displayError(){
        console.log(`Error Path : ${this.path} , Time : ${this.time}`)
    }
}

const error1 = new ErrorsFile('file' , new Date())
console.log(error1)

const error2 = new ErrorsFile('loss internet' , new Date())
console.log(error2)

const error3 = new ErrorsFile('cart' , new Date())
console.log(error3)