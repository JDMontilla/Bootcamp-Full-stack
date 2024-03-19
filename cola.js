///// Creamos una clase para cada nodo dentro de la cola

class Node{
    // Cada nodo tiene dos propiedades, su valor y el otro es el puntero que nos indica que le sigue

    constructor(value){

        this.value = value;
        this.next = null;
    }

}

    // Creamos una clase para la cola

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;

    }

    //El metodo de enqueue recibe el valor y lo agrega al final de la cola

    enqueue(val){

        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;

        }else{
            this.last.next = newNode;
            this.last = newNode;

    }
    return ++this.size;
    
    }

    // el metodo dequeue elimina el valor incial de la cola y devuelve otro valor

    dequeue(){
        if(!this.first) return null

        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }

        this.first = this.first.next;
        this.size--
        return temp.value;
    }

}    

const vCola = new Queue;
vCola.enqueue('Valor1');
vCola.enqueue('Valor2');
vCola.enqueue('Valor3');
vCola.enqueue('Valor4');

console.log(vCola.first);
console.log(vCola.last);
console.log(vCola.size);
vCola.enqueue('Valor5');
console.log(vCola.dequeue());
console.log('Muestre los nodos de la cola')
console.log(vCola.first);


