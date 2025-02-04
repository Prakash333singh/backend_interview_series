class car {
  constructor(brand) {
    this.carname = brand;
  }
  cardemo() {
    console.log("this method");
  }
}

class Model extends car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    console.log("this is model", this.carname, this.model);
  }
}

let mycar = new Model("honda");
let car1 = new Model("toyota", "innova");
mycar.show();
mycar.cardemo();
