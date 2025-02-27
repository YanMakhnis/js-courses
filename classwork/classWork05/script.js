class Transformer {
    #car = false;
    constructor(name, weapon) {
        this.name = name
        this.weapon = weapon
    }
    sayName() {
        console.log(`My name is ${this.name}`)
    }
    shoot(){
        this.weapon.shoot()
    }
    #run() {
        console.log("I'm running")
    }
    #drive() {
        console.log("I'm driving")
    }
    tranform() {
        this.#car = !this.#car
    }
    move() {
        this.#car ? this.#drive() : this.#run()
    }
}

class Desepticon extends Transformer {
    #fraction = "Desepticon"
    sayName() {
        super.sayName()
        console.log( `I am ${this.#fraction}`)
    }
}

class Avtobot extends Transformer {
    #fraction = "Avtobot"
    sayName() {
        super.sayName() 
        console.log(`I am ${this.#fraction}`)
    }
}

class Weapon {
    #ammunition;
    constructor (ammunition){
        this.#ammunition = ammunition
    }
    shoot() {
        if (this.#ammunition > 0) {
            this.#ammunition--
            console.log("Shooot!!!")
        }
    }
    getAmmunition(){
        return this.#ammunition
    }
}
let weapon = new Weapon(5);

let bumbleBee = new Avtobot("Bumblebee", weapon)
bumbleBee.move()
bumbleBee.tranform()
bumbleBee.move()


let megatron = new Transformer("Megatron")

bumbleBee.shoot()
console.log(bumbleBee.weapon.getAmmunition())
