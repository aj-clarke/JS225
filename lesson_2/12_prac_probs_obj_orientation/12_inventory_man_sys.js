function makeInventoryItem(name, stock, price) {
  return {
    id: storeInventoryIds.getNextId(),
    name,
    stock,
    price,

    setPrice(newPrice) {
      if (newPrice < 0) return console.log('Invalid Price');

      this.price = newPrice;
    },

    describe() {
      console.log(
        "=> Name: " + this.name + "\n"    +
        "=> ID: " + this.id + "\n"        +
        "=> Price: " + this.price + "\n"  +
        "=> Stock: " + this.stock
      );
    },
  };
}

let storeInventoryIds = {
  nextId: -1,

  getNextId() {
    return this.nextId += 1;
  },
};

let scissors = makeInventoryItem('Scissors', 8, 10);

let cordlessDrill = makeInventoryItem('Cordless Drill', 15, 45);

console.log(scissors);
scissors.setPrice(5);
console.log(scissors);
scissors.setPrice(-.01);
console.log(scissors.price)
scissors.describe();