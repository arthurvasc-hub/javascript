function createPerson(name, lastName, age){
    return {
        name,
        lastName,
        age,
        getFullName() {
            return `${this.name} ${this.lastName}`
        }
    }
}

let person1 = createPerson('Tutu', 'Vasconcelos', 25);