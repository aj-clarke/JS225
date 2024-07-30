let account = {
  balance: 100,

  deposit(amount) {
    this.balance += amount
    return amount;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      let adjustedAmount = amount - Math.abs(this.balance - amount)
      this.balance -= adjustedAmount;
      return adjustedAmount;
    }
    // LS SOLUTION for adjustment balance.... IM SO DUMB!!!
    // if (amount > this.balance) {
    //   amount = this.balance;
    // }

    this.balance -= amount;
    return amount;
  },
};

console.log(account.balance);
console.log(account.withdraw(110));
console.log(account.balance);

