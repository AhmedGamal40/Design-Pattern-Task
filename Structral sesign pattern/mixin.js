// 2 - Structral Desing Pattern  => a - Mixin 
//  mixin dp used to make relation between class and object , (don't change class structral )
// mixin dp used prototype to make relation
class Player{
    constructor(name , age){
        this.name = name , 
        this.age = age
    }
    retuenName(){
        console.log(`The Player Name : ${this.name} , Age : ${this.age}`)
    }
}

let play = {
    setPalyerInfo(playerNum , club){
        this.playerNum = playerNum ,
        this.club = club 
    } ,
    getPalyerInfo(){
        console.log(`the Player Name Is ${this.name} , the Player Nember is : ${this.playerNum} and the player Club is ${this.club}`)
    }
}

const player1 = new Player('Ahmed Gamal' , 24)
player1.retuenName()

Object.assign(Player.prototype , play)
player1.setPalyerInfo(22 , "Al Ahly")
console.log(player1.getPalyerInfo())

