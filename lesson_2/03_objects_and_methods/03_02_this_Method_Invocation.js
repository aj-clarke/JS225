let counter = {
  count: 0,
  advance: function() {
    this.count += 1
  },
};

console.log(counter);

counter.advance();
console.log(counter);

counter.advance();
counter.advance();

console.log(counter);
