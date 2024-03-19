class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;

    }

    datos(){
        return `Mi nombre es: ${this.nombre}, mi edad es: ${this.edad}`
    }

    polimorfismo(){
        return this.datos();
    }
}

class Profesor extends Persona{
    constructor(nombre, edad, materia){
        super(nombre, edad,);
        this.materia = materia;
    }

    polimorfismo(){
        return `${super.datos()} y dicta la materia ${this.materia}`
    }
}

class Estudiante extends Persona{
    constructor(nombre, edad, grado){
        super(nombre, edad,);
        this.grado = grado;
    }

    polimorfismo(){
        return `${super.datos()} y esta en el grado ${this.grado}`
    }
}

let profesor = new Profesor('Julian Diaz', 35, 'Matematicas');
console.log(profesor);
console.log(profesor.polimorfismo());

let estudiante = new Estudiante('Andres Angel', 15, 'septimo');
console.log(estudiante.polimorfismo());