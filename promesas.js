const peliculasAccion = [
{
    nombre: "Duro de matar", 
    año: 2005

},

{
    nombre: "Toy Story", 
    año: 2001

},

{
    nombre: "la isla", 
    año: 2010

}
];

function getpeliculas(){
    return new Promise((resolve, reject) => {
        if(peliculasAccion == 0){
            reject(new Error ("No se encuentran Datos ERROR"))
        }
        setTimeout (() => {resolve(peliculasAccion);}, 2000)
    })
}

/*getpeliculas()
.then ((peliculasAccion) => console.log(peliculasAccion))
.catch((err) => console.log(err.message));*/

const mostrarPeliculas = async() => {
try {
    const pelicula = await getpeliculas();
    console.log(pelicula);
    
} catch (error) {
    console.log(error);
}

}

mostrarPeliculas();