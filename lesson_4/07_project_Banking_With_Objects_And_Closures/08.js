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
    },

    transfer(source, destination, amount) {
      // let sourceIdx = this.getAccountIndex(source);
      // let destiantionIdx = this.getAccountIndex(destination);
      // if (sourceIdx === -1 || destiantionIdx === -1) {
      //   return console.log('Invalid Account Information');
      // }

      // this.accounts[sourceIdx].balance -= amount;
      // this.accounts[destiantionIdx].balance += amount;
      // AGAIN, I AM AN IDIOT.....
      source.withdraw(amount);
      destination.deposit(amount);
      return amount;
    },

    getAccountIndex(account) {
      for (let i = 0; i < this.accounts.length; i++) {
        if (this.accounts[i].number === account.number) {
          return i;
        }
      }
    }
  };
}

let bank = makeBank();
let source = bank.openAccount();
console.log(source.deposit(10));
// 10
let destination = bank.openAccount();

console.log(bank.transfer(source, destination, 7));

console.log(source.balance);

console.log(destination.balance);