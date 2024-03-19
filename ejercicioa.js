const programador = [

{

    nombre:"Adrian",
    apellido:"Duran",
    lenguajes: "Java y C#",

},

{

    nombre:"Sergio",
    apellido:"Montaño",
    lenguajes: ".NET",

},

{

    nombre:"Duvan ",
    apellido:"Diaz",
    lenguajes: "php",

},

{

    nombre:"David ",
    apellido:"Montilla",
    lenguajes: "GO",

},

]


const estructuras = programador.map(pro =>{
    return{
        lenguajes : "Fullstack",

    }
})


//const estructura = programador.map(function(junior){
//    return junior.nombre + ''+ junior.lenguajes;
//})

console.log(estructuras);