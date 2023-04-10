class Person{
    constructor(name,age){
        this.name = name 
        this.age = age
    }
    display(){
        console.log(`Yo this is ${this.name} and im ${this.age}`)
        console.log(__filename)
        console.log(__dirname);
    }
}
module.exports = Person