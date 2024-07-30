let account = {
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

console.log(account.deposit(23));
// 23

console.log(account.transactions);
// [ {...} ]

console.log(account.transactions[0]);
// { type: "deposit", amount: 23 }