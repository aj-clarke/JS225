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
    nextAccountNumber: 101,
    openAccount() {
      let account = makeAccount();
      account.number = this.nextAccountNumber;
      this.nextAccountNumber += 1;
      this.accounts.push(account);
      return account;
    }
  };
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.number);
// 101
console.log(bank.accounts);
// [{...}]
console.log(bank.accounts[0]);

let secondAccount = bank.openAccount();
console.log(secondAccount.number);
// 102