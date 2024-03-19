////// Creamos una clase para cada nodo
class Node{
    /// cada nodo tiene dos propiedades, su valor y otro es el puntero que nos indica que le sigue
    next = null;
    valor = null;

    constructor(valor){
        this.valor = valor;
    }

}

//  Clase de la lista

class ListaEnlazada{

    primero = null;
    ultimo = null;

    // agregar a la lista

    agregarDatos = (valor) =>{

        // Nuevo nodo

        const dato = new Node(valor);

        if(!this.primero){
            this.primero = dato;
            this.ultimo = dato;
            return;
        }

        this.ultimo.nex = dato;
        this.ultimo = dato;
    }

    num = () => {
        let contador = 0;
        let dato = this.primero;

        if(!dato) return 0;
        else contador = 1;

        while (dato.next) {
            dato = dato.next;
            contador++
        }

        return contador;

    }

    buscarDato = (valor) => {

        let dato = 

    }
}


const lista = new ListaEnlazada();
lista.agregarDatos('a');
console.log(lista.numDatos());
lista.agregarDatos('b');
lista.agregarDatos('c');
lista.agregarDatos('d');

console.log(lista);