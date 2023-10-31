class Person {
    #name;
    #gender;
    constructor(name, gender) {
        this.#name = name;
        this.#gender = gender;
    }
    getName() { return this.#name; }
    getGender() { return this.#gender; }
    setName(name) { this.#name = name; }
    setGender(gender) { this.#gender = gender; }
}
let person = new Person ("David", "male");
console.log(person.getName());
console.log(person.getGender());
person.setName("Maria");
person.setGender("female");
console.log(person.getName());
console.log(person.getGender());

class Apartment {
    #residents;
    constructor() {
        this.#residents = [];
    }
    addResidents(person) {
        this.#residents.push(person);
    }   
}

class House {
    #apartments;
    #maxApartments;
    constructor(maxApartments) {
        this.#apartments = [];
        this.#maxApartments = maxApartments;
    }
    addApartment(apartment) {
        if (this.#apartments.length < this.#maxApartments) {
            this.#apartments.push(apartment);
        } else {
            console.log("Максимальна кількість квартир в будинку вже досягнута.");
        }
    }
}
let person1 = new Person("David", "male");
let person2 = new Person("Maria", "female");

let apartment1 = new Apartment();
let apartment2 = new Apartment();

apartment1.addResidents(person1);
apartment2.addResidents(person2);

let house = new House(2); 

house.addApartment(apartment1);
house.addApartment(apartment2);
