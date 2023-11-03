// Crea una interface Vehicle con propiedades comunes a distintos vehículos como model, year, color, etc. Luego
// crea interfaces Car y Motorcycle que hereden de Vehicle y tengan propiedades específicas, implemente en una
// clase


interface Vehicle {
    model: string;
    year: number;
    color: string;
  }
  

  interface Car extends Vehicle {
    doors: number;
    engine: string;
  }
  
  
  interface Motorcycle extends Vehicle {
    cylinders: number;
    transmission: string;
  }
  

  class Vehicle implements Vehicle {
    public model: string;
    public year: number;
    public color: string;
  
    constructor(model: string, year: number, color: string) {
      this.model = model;
      this.year = year;
      this.color = color;
    }
  }
  
  
  class Car extends Vehicle implements Car {
    public doors: number;
    public engine: string;
  
    constructor(model: string, year: number, color: string, doors: number, engine: string) {
      super(model, year, color);
      this.doors = doors;
      this.engine = engine;
    }
  }
  
  
  class Motorcycle extends Vehicle implements Motorcycle {
    public cylinders: number;
    public transmission: string;
  
    constructor(model: string, year: number, color: string, cylinders: number, transmission: string) {
      super(model, year, color);
      this.cylinders = cylinders;
      this.transmission = transmission;
    }
  }
  
  
  const car = new Car('Ford', 2023, 'azul', 4, 'gasolina');
  const motorcycle = new Motorcycle('Crypton2', 2022, 'rojo', 4, 'manual');
  
  console.log(car);
  console.log(motorcycle);
  