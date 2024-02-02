class Person {

static hands = 2;
age = 24;

constructor(name){
    this.name = name;
}

}

let p1 = new Person("Arthur")

console.log(`${p1.name} has ${p1.age} years old and have ${Person.hands} hands.`)