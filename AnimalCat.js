class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    move(speed) {
      this.speed = speed;
      console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} стоит.`);
    }
  }
  
    class Cat extends Animal {
    hide() {
        console.log(`${this.name} прячется!`);
    }
  }
  
  let cat = new Cat("Белый кот");
  
  cat.move(5); 
  cat.hide(); 