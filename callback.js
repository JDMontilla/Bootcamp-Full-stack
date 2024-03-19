function solicitudServidor (consulta, callback) {
    setTimeout (function(){
    let respuesta = consulta + "ejecutando";
    callback(respuesta);
    }, 5000);
}

function obtenerResultados(resultados){
    console.log("respuesta servidor: " + resultados);
}

solicitudServidor("el servidor esta ", obtenerResultados)


function modificar(array, callback){
    array.push("red")
    setTimeout(function(){
    callback()
    }, 3000)
    }
  

const partes = ["conexion", "caidas", "servidor"];

modificar(partes, function() {
    console.log(`se modifica el arreglo de ${partes.length} elementos ` )
    console.log(partes)

});