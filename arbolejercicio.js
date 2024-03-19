class Nodo {
    constructor(valor){
        this.valor = valor;
        this.derecha = null;
        this.izquierda = null;
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

}

insertar(valor){
    const nuevoNodo = new Nodo(valor);

    if(this.raiz === null){
        this.raiz = nuevoNodo;
    }else {
        this.insertarNodo(this.raiz, nuevoNodo);
    }
}

insertarNodo(Nodo, nuevoNodo){
    if(nuevoNodo.valor < Nodo.valor) {
        if(Nodo.izquierda === null){
            Nodo.izquierda = nuevoNodo;
        }else {
            this.insertarNodo(nodo.izquierda, nuevoNodo);
        }
    }else {
        if (nodo.derecha === null){
            nodo.derecha = nuevoNodo;
        }else {
            this.insertarNodo(nodo.derecha, nuevoNodo);
        }
    }
}

buscar(valor){
    return this.buscarNodo(this.raiz, valor);
}
