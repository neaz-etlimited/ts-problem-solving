class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}

  public displayInfo() {
    console.log(
      `The brand name of the car is ${this.brand}, model is ${this.model} and the year is ${this.year}`
    );
  }
}

new Car("Audi", "R8", 2011).displayInfo();
