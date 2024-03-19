class Vehiculo {
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
  
    get obtenerMarca() {
      return this.marca;
    }
  
    set asignarMarca(nuevaMarca) {
      this.marca = nuevaMarca;
    }
  
    hacerSonido() {
      return "Haciendo ruido genérico del vehículo";
    }
  }
  
  class Automovil extends Vehiculo {
    constructor(marca, modelo, año, puertas) {
      super(marca, modelo, año);
      this.puertas = puertas;
    }
  
    hacerSonido() {
      return "¡Vroom Vroom!";
    }
  }
  
  class Motocicleta extends Vehiculo {
    constructor(marca, modelo, año, cilindrada) {
      super(marca, modelo, año);
      this.cilindrada = cilindrada;
    }
  
    hacerSonido() {
      return "¡Vroom!";
    }
  }
  
  const automovil = new Automovil('Toyota', 'Corolla', 2020, 4);
  const motocicleta = new Motocicleta('Honda', 'CBR600RR', 2019, '600cc');
  
  console.log(`Marca del automóvil: ${automovil.obtenerMarca}`);
  
  automovil.asignarMarca = 'Ford';
  console.log(`Nueva marca del automóvil: ${automovil.obtenerMarca}`);
  
  console.log(automovil.hacerSonido()); 
  console.log(motocicleta.hacerSonido()); 