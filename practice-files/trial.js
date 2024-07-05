class Animal {
  constructor(legs, hand) {
    this.legs = legs
    this.hand = hand
  }
  walk() {
      console.log('walking on legs');
  }
}

class Bird extends Animal {
  constructor(legs) {
      super(legs, 4)
  }
  fly() {
      console.log('flying');
      console.log(this.hand)
  }
}


let bird = new Bird(2);

bird.walk();
bird.fly();

console.log("Bird is flying")