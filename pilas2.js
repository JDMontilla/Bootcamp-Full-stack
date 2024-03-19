/*function Stack(){
    this.size = 0;
    this.storage = {};
}

Stack.prototype.push = function(data){
    var size = ++this._size,
    deleteData;

    if(size){
        deleteData = this._storage[size];

        delete this._storage[size];
        this._size--;

        return deleteData;
    }
};


class Node{
    constructor(value){
        this.value = value;
        this.siguiente = null;
    }
}

class Pila {
    constructor(){
        this.arriba = null;
        this.abajo = null;
        this.length = 0;
    }

    peek(){
        return this.arriba;
    }

    Indice(index){
        if(index === 0){
            return this.arriba.value
        }

        let nodoT;

        nodoT = this.arriba;
        for(let i = 1; i<this.length; i++){
        nodoT = nodoT.siguiente;
        if (i === index){
            return nodoT.value
        }
        }
    }

    push(value){
        const nNodo = new Node (value);
    }
}*/

// listas enlazadas

// Primero, definimos cómo se ve una caja
class Node {
    constructor(data) {
        this.data = data; // El juguete que va dentro de la caja
        this.next = null; // La flecha que apunta a la próxima caja, inicialmente vacía
    }
}

// Ahora, imaginemos las cajas conectadas como una lista
class LinkedList {
    constructor() {
        this.head = null; // La primera caja en la lista
    }

    // Agregamos una nueva caja al final de la lista
    append(data) {
        const newNode = new Node(data); // Creamos una nueva caja con el juguete adentro

        // Si la lista está vacía, esta nueva caja se convierte en la primera (la cabeza)
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        // Avanzamos hasta llegar a la última caja en la lista
        while (current.next) {
            current = current.next;
        }
        // Finalmente, conectamos la nueva caja a la última caja de la lista
        current.next = newNode;
    }

    // Método para imprimir los datos de todas las cajas en la lista
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += 'null'; // Para indicar el final de la lista
        console.log(result);
    }
}

// Ahora, creamos una lista y agregamos algunos juguetes a nuestras cajas
const list = new LinkedList();
list.append("muñeca");
list.append("carrito");
list.append("bloques");

// Finalmente, imprimimos la lista de juguetes que tenemos
list.printList(); // Output: muñeca -> carrito -> bloques -> null


