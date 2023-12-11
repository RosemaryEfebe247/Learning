class Person {
    constructor(name){
        this.name = name
    }
    getName() {
        console.log(this.name)
    }
}

const personobj = new Person('joseph')
personobj.getName()
console.log(personobj[name])