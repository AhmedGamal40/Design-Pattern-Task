// 3 - Dehiveor Desigm Pattern  => b - Observer
// EX: Youtube Channel 

class Youtube{

    constructor(){
        this.subscribers = []
        this.videoTitle = ''
    }

    subscribe(user){
        this.subscribers.push(user)
    }

    unsubscribe(user){
        this.subscribers = this.subscribers.filter(sub => sub !== user)
    }
    newVideo(title){
        this.videoTitle = title
        this.notify()
    }
    notify(){
        this.subscribers.forEach(sub => sub.update(this.videoTitle))
    }
}

class User{
   
    update(videoTitle){
        console.log(`Hey New Video ${videoTitle}`)
    }
}

const youtube1 = new Youtube()

const Ahmed = new User()
youtube1.subscribe(Ahmed)

const Ali = new User()
youtube1.subscribe(Ali)
youtube1.newVideo('First Video')

const Aya = new User()
youtube1.subscribe(Aya)
