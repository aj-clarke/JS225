let account = {
  balance: 0,

  deposit(amount) {
    this.balance += amount
    return amount;
  },
};

console.log(account.balance);
console.log(account.deposit(12));
console.log(account.balance);
console.log(account.deposit(10));
console.log(account.balance);