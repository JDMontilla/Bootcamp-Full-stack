// creamos una clase para cada nodo dentro de la pila

class Node{

    // cada nodo tiene dos propiedades, son el valor y el puntero que indica el nodo que sigue

    constructor(value){
        this.value = value;
        this.siguiente = null;
    }
}

// creamos nuestra clase para la pila

class Stack{
    // La pila va a tener tres propiedades, el primer nodo, el ultimo nodo y el tamaño de la pila

    constructor(){
        this.primero = null;
        this.ultimo = null;
        this.sixe = 0;
    }

// Metodo Peek(): Retorna el ultimo valor ingresado a la pila, sin sacarlo de está.

peek(){
    return this.primero;
}

// Metodo Push: Recibe un valor y lo agrega a la pila

push(val){

    let newNode = new Node(val);
        if(!this.primero){
        this.primero = newNode;
        this.ultimo = newNode;
            }else {
                let temp = this.primero;
                this.primero = newNode;
                this.primero.siguiente = temp;
            }

        return ++this.size;

    }

// Metodo POP elimina el elemento de la parte superior de la pila y va a devolver un valor    

    pop(){
        if(!this.primero) return null
        let temp = this.primero;
        if(this.primero === this.ultimo){
            this.ultimo = null;
        }
        this.primero = this.primero.siguiente;
        this.size--;
        return temp.value;
    }

}

const pila = new Stack;
pila.push('Dato1');
pila.push('Dato2');
pila.push('Dato3');
pila.push('Dato4');
console.log(pila.primero);
console.log('probar metodo peek');
pila.push('Dato5');
console.log(pila.peek());
console.log(pila.ultimo);
console.log(pila.size);
console.log('eliminar dato');
console.log(pila.pop());
console.log('verificar Nodo en la pila');
console.log(pila.primero);
