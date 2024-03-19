/*const Vehiculo = {

    marca: "Ferrari",
    color: "rojo",
    modelo: 2019,

}*/

class Vehiculo {
    constructor(id,marca, color, modelo, estado){

        this.id = id;
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.estado = estado;
    }

    arrancar(){
        console.log("El carro arranco");
    }
}

class Moto extends Vehiculo{
    constructor(id,marca, color, modelo, estado, tFreno, cilindraje){
        super (id,marca, color, modelo, estado);
        this.tFreno = tFreno;
        this.cilindraje = cilindraje;
    } 

    tCilindraje(){
      switch (this.cilindraje){
        case 1: 
        console.log('La moto es de bajo cilindraje');
        break;

        case 2: 
        console.log('La moto es de medio cilindraje');
        break;

        case 3: 
        console.log('La moto es de alto cilindraje');
        break;
        default:

      }
    }

}

let Honda = new Moto(4,'eco','azul', 2018, 'usada','ABS',125);
let Suzuki = new Moto(5,'cbf300','verde', 2020, 'usada','ABS',350);
let Akt = new Moto(6,'TT600','negra', 2024, 'nueva','ABS',500);

console.log(Honda);
Honda.tCilindraje();
console.log(Suzuki);
Suzuki.tCilindraje();


class Camioneta extends Vehiculo{
    constructor(id,marca, color, modelo, estado, peso, pasajeros, tipoC){
        super(id,marca, color, modelo, estado);
        this.peso = peso;
        this.pasajeros = pasajeros;
        this.tipoC = tipoC;
    }

    combustible(){
        if (this.tipoC == true){
            console.log("La camioneta trabaja con ACPM");
        }else{
            console.log("La camioneta trabaja con GASOLINA");
        }
    }
}

let Toyota = new Camioneta(2, 'Toyota', 'negro', 2015, 'usada', '1.500 kg', 5, true);
let Ford = new Camioneta(3, 'Ranger', 'azul', 2024, 'nueva', '1.650 kg', 6, false);

console.log(Ford);
Ford.combustible();


const Ferrari = new Vehiculo(1,'Ferrari', 'rojo', 2019, 'Nuevo');
console.log(Ferrari.arrancar());