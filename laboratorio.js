class Empleado {
    constructor(id, nombre, tDocumento, nDocumento, cargo, tipoContrato, salario ){
        this._id = id;
        this._nombre = nombre;
        this._tDocumento = tDocumento;
        this._nDocumento = nDocumento;
        this._cargo = cargo;
        this._tipoContrato = tipoContrato;
        this._salario = salario;
    }

//Metodos set y get

    get getId(){
        return this.id;
    }

    set setId(id){
        this._id = id;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this._nombre = nombre;
    }

    get getTdocumento(){
        return this._tDocumento;
    }

    set setTdocumento(tDocumento){
        this._tDocumento = tDocumento;
    }

    get getNdocumento(){
        return this._nDocumento;
    }

    set setNdocumento(nDocumento){
        this._nDocumento = nDocumento;
    }

    get getCargo(){
        return this._cargo;
    }

    set setCargo(cargo){
        this._cargo = cargo;
    }

    get getTipocontrato(){
        return this._tipoContrato;
    }

    set setTipocontrato(tipoContrato){
        this._tipoContrato = tipoContrato;
    }

    get getSalario(){
        return this._salario;
    }

    set setSalario(salario){
        this._salario = salario;
    }

    get getInformacion (){
        return `id: ${this._id} ${this._nombre} ${this._tDocumento} ${this._nDocumento} ${this._cargo} ${this._tipoContrato} ${this._salario}`
    }

    get getDato(){
        return `${this._cargo}`
    }

    Epolimorfismo(){
        return this.Epolimorfismo();
    }

}

class Supervisor extends Empleado {
    constructor(id, nombre, tDocumento, nDocumento, cargo, tipoContrato, salario, pCargo ){
        super (id, nombre, tDocumento, nDocumento, cargo, tipoContrato, salario);
        this._pCargo = pCargo;
    }

    get getPcargo(){
        return this._pCargo;
    }
    
    set setPcargo(pCargo){
        this._pCargo = pCargo;
    }

    get getInformacion (){
        return `${super.getInformacion} ${this._pCargo}`
    }
}


let empleado1 = new Empleado (1, 'David Montilla', 'cedula', 1012423930, 'Programador', 'indefinido', 3200000);
let empleado2 = new Empleado (2, 'Alejandro Diaz', 'cedula', 1012571920, 'soporte', 'Termino fijo', 2200000);
let empleado3 = new Supervisor(3, 'Juan Perez', 'cedula', 1320183946, 'planta', 'Termino fijo', 5000000, 10)

//console.log(empleado1);
console.log(empleado3);