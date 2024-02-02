class Person {

_age = 0;
steps = 0;

constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    get age(){
        return this._age;
    }

    set age(x) {
        if (typeof x == 'number'){
            this._age = x;
        } else { 
            console.log('Apenas numeros...')
        }
    }

}

let p1 = new Person('Arthur', 'Vasconcelos');
let p2 = new Person('Bieca');
let p3 = new Person('Misso');

p1.age = 25;

console.log(`${p1.fullName}: ${p1.age}`);


