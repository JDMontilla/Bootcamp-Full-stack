/*const Animal = {

    id: 1,
    nombre: "perro"
    color: "negro"
};

console.log(Animal.nombre);
console.log();*/


/*class Animal{
    constructor(){
        this.id = 1;
        this.nombre = "perro";
        this.color = "negro"
    }
}

const perro = new Animal();
console.log(perro)*/

class Animal {

    constructor(id, nombre, color){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }

    resul(){
        return `${this.nombre} el color es ${this.color}`;
    }
}

class Perro extends Animal{

    constructor(id, nombre, color, sexo){
        super(id, nombre, color);
        this.sexo = sexo;
        this.raza = null;
    }

    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }

    static Cruce(){
        console.log('ESte año vamos a cruzar nuestro perro')
    }

}

Perro.Cruce();

const perro = new Perro(1, 'perro', 'negro');


const gato = new Animal(2, 'gato', 'gris');

console.log(perro);
perro.setRaza = 'Pastor Aleman';
console.log(perro.getRaza)
