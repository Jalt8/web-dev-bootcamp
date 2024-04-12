class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`
    }
    mew(){
        return `MEOWWWW!!`
    }
}


class Dog{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`
    }
    bark(){
        return `WOOOOF!!`
    }
}

let kitty = new Cat('kitty', 7)