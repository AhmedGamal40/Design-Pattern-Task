// 2 - Creational Desing Pattern  => c - Builder 


// EX1
class Course{
    constructor(name , price , rate , isFree = true){
        this.name = name,
        this.price = price,
        this.rate = rate,
        this.isFree = isFree
    }

    getCourse(){
        return console.log(JSON.stringify(this))
     }
}

// This nourmal way 
// const Course1 = new Course('course1' , 100 , 4.5 , false)
// const Course2 = new Course('course2' , 200 , 4.5 , true)
// const Course3 = new Course('course3' , 500 , 3.5 )

// Course3.getCourse() 

// uesing builder 
class CourseBuilder{
    constructor(name , price , rate , category = 'Programming' ){
        this.course = new Course(name , price , rate)
        // this.name = name,
        // this.price = price,
        // this.rate = rate
        this.category = category
    }

    setName(name){
        this.course.name = name
        return this
    }

    setPrice(price){
        this.course.price = price
        return this
    }

    setRate(rate){
        this.course.rate = rate
        return this
    }
     setCategory(category){
        this.course.category = category
        return this
    }
    build(){
        return this.course
    }
}

const Course1 = new CourseBuilder().setName('course1').setPrice(100).setRate(4.5).setCategory("Software").build()
const Course2 = new CourseBuilder().setName('course2').setPrice(200).setRate(4.5).setCategory('Design').build()

Course1.getCourse()
