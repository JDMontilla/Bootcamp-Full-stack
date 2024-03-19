// creamos una clase para cada nodo en el arbol
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class ArbolBinario {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let actual = this.root;
        while (true) {
            if (value === actual.value) return undefined;
            if (value < actual.value) {
                if (actual.left === null) {
                    actual.left = newNode;
                    return this;
                }
                actual = actual.left;
            } else {
                if (actual.right === null) {
                    actual.right = newNode;
                    return this;
                }
                actual = actual.right;
            }
        }
    }

    // el metodo busqueda toma un valor como parametro y busca el valor dentro del arbol
    // si encuentra el nos devuelve el nodo y si no que devuelva un undefined


    busqueda(value){
        if(this.root === null) return false
        let actual = this.root;
        let iden = false
        while(actual && !iden){
            if(value < actual.value){
                actual = actual.left;
            }else if(value > actual.value){
                actual = actual.right;
            }else{
                iden = true;
            }
        }

        if(!iden) return undefined
        return actual;
    }
}

// Ejemplo de uso
const arbol = new ArbolBinario();
arbol.insert(10);
arbol.insert(5);
arbol.insert(15);
console.log(arbol);
console.log(arbol.busqueda('b'));
console.log(arbol.busqueda('a'));
console.log(arbol.busqueda('c'));