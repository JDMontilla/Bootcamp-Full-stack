//let lista = ["Cero", "Uno",]

const prueba = [1, 2, "true", "Bienvenido",["f","y",8,[3,4,"Hola","Maria"]]]

console.log(prueba[4][3][2]);

//Nos permite llenar elementos
const arreglo = Array.of("x","y","Hola","Dario",8,9,0)
console.log(arreglo)


//Es un metodo que a todas las posiciones les va almacenar el mismo valor
const valor = Array(200).fill(false);
console.log(valor)

const frutas = ["lulo", "fresa", "manzana", "papaya"];

let primerE = frutas[0];
console.log(primerE);
let ultimoE = frutas[frutas.length -1];
console.log(ultimoE)

frutas.forEach(function(el,index){
    console.log(`<li id = "${index}">${el}</li>`);
})

const npruebas = [10,20,30,40,50,60];
npruebas.forEach(function(e){
    console.log(e)
})

const frutass = ["lulo", "fresa", "manzana", "papaya","Melocoton","piña"];
frutass.forEach(e =>
    console.log(e));

const frutasz = ["lulo", "fresa", "manzana", "papaya","Melocoton","piña"];
const res = frutas.filter(value => value.length > 4);
console.log(res); 

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
console.log("Números impares:");
for (let i = 0; i < numeros.length; i++) {
    // Verificar si el número es impar
    if (numeros[i] % 2 !== 0) {
        // Mostrar el número si es impar
        console.log(numeros[i]);
    }
}

const Empleados = [

    {
        nombre: "Andres Duran",
        correo: "andres@yahoo.com",
        cedula: 80935461,
        salario: 3200000
    },

    {
        nombre: "Mario Gomez",
        correo: "Gomez123@yahoo.com",
        cedula: 79845274,
        salario: 2300000
    },

    {
        nombre: "Leonardo Rodriguez",
        correo: "LeonardoRo@yahoo.com",
        cedula: 101123472,
        salario: 4200000
    },

    {
        nombre: "Maria Duran",
        correo: "maria78@yahoo.com",
        cedula: 805762910,
        salario: 1800000
    },

    {
        nombre: "Julio Martinez",
        correo: "Marjulio@yahoo.com",
        cedula: 1012465839,
        salario: 2200000
    },

]

    const may = Empleados.filter(value => value.salario > 3000000);
        console.log(may)


function Sumar(a,b,c,...otros){
    let suma = a+b+c
    otros.forEach(n=> suma +=n);
    return suma;
} 
 
console.log(Sumar(1,2,3,4));







