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

function makeBank() {
  return {
    accounts: [],
  };
}

let bank = makeBank();
console.log(bank.accounts);