//Metodo shift
const array = ['pc', 'redes','bases de datos', 'auditoria'];
array.shift();
console.log(array)

//Metodo unshift

const arreglo = ['pc', 'redes','bases de datos', 'auditoria'];
console.log(arreglo.unshift('Linux'));
console.log(arreglo);

//metodo reverse

const arreglor = ['pc', 'redes','bases de datos', 'auditoria'];
console.log(arreglor.reverse());

//metodo splice

const arreglos = ['pc', 'redes','bases de datos', 'auditoria'];
arreglos.splice(2,0, 'bases de datos')
console.log(arreglos)

//metodo lastIndeOf()

const arreglo1 = ['pc', 'redes','bases de datos', 'auditoria'];
console.log(arreglo1.lastIndexOf('auditoria'));

//metodo flat()

const arreglof = ['pc', 'redes','bases de datos', 'auditoria',['c#','java','Ruby']];
console.log(arreglof.flat());

//metodo isArray()

//console.log(array.isArray(['pc', 'redes','bases de datos', 'auditoria','c#','java','Ruby']));
//console.log(array.isArray({nombre: 'Julian'}));

//metodo findlast

/*const arrayl = [5, 12, 8, 130, 44, 78, 98, 120];
const numero = arrayl.findLast(a =>{
    console.log("n", a)
    return a === 12;
})
console.log(numero);*/

//Metodo lastIndexOf()

const array3 = [5, 12, 8, 130, 44, 78, 98, 120];
const numero2 = array3.findIndex(a => a === 98);
console.log(numero2);

//metodo sort

const arrayz = [5, 12, 8, 130, 44, 78, 98, 120];
const orden = arrayz.sort((a,b) => a- b);
console.log(orden);
console.log(arrayz);