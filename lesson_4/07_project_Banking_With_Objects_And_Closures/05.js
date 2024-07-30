function makeAccount() {
  return {
    balance: 0,
    transactions: [],

    deposit(amount) {
      this.balance += amount
      this.transactions.push({ type: 'deposit', 'amount': amount })
      return amount;
    },

    withdraw(amount) {
      if (amount > this.balance) {
        amount = this.balance;
      }

      this.balance -= amount;
      this.transactions.push({ type: 'withdrawal', 'amount': amount })
      return amount;
    },
  };
}

let account = makeAccount();
console.log(account.deposit(15));

console.log(account.balance);

let otherAccount = makeAccount();
console.log(otherAccount.balance);