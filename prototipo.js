function Persona (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

}

//Metodo fuera de la funcion constructora
Persona.prototype.caminar = function(){
    console.log(" Debo caminar todos los dias")
}

const Administrador = new Persona("Raul Meneses", 27);
const Mecanico = new Persona("Braya Diaz", 37);

console.log(Administrador);
console.log(Mecanico);

//Herencia prototipica

function Ingeniero (nombre, edad, correo){
    this.super = Persona;
    this.super(nombre,edad);
    this.correo = correo;

}

//Ingeniero hereda de persona se trae todo lo del prototipo principal
Ingeniero.prototype = new Persona();
Ingeniero.prototype.constructor = Ingeniero;

//Sobreescritura del metodo del prototipo padre
Ingeniero.prototype.caminar = function(){
    console.log("Me levanto 6am a trabajar")
}

//Hacemos un metodo propio
