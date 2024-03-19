// Creamos una clase para cada nodo en una lista

class Node{
    // este nodo tiene 2 propiedades, el valor y el puntero que indique el nodo que sigue
    constructor(val){
        this.val=val;
        this.next = null;
    }
}


// creamos la clase principal linkedlist
class linkedlist{
    // Va a llevar dentro del constructor en este caso 3 propiedades, el encabezado, la cola y el tamaño
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

// Creamos nuestro metodo push toma valor de parametro y lo asigna al final
push(val){
    const nNode = new Node (val);
    if(!this.head){
        this.head = nNode;
        this.tail = this.head;
    } else {
        this.tail.next = nNode;
        this.tail = nNode;
    }

    this.length++
    return this
}
    // Creamos un metodo que nos va a eliminar la cola de la lista

    pop(){
        if(!this.head) return undefined
        let current = this.head;
        let nTail = current;

        while (current.next) {
          nTail = current;
          current = current.next;
        }

        this.tail = nTail;
        this.tail.next = null;
        this.length--

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    // Metodo que nos coloque un elemento para actualizar la cabecera

    ActualC(val){
        const nNode = new Node(val);
        if(!this.head){
        this.head = nNode
        this.tail = this.head;

        }
        nNode.next = this.head;
        this.head = nNode
        this.length++
        return this.length;

    }
}


const lista = new linkedlist();
lista.push('a');
lista.push('b');
lista.push('c');
lista.ActualC('c');
console.log(lista);