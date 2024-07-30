// function makeAccount() {
//   let balance = 0;
//   let transactionsList = [];
  
//   return {
//     // balance: 0,
//     // transactions: [],

//     deposit(amount) {
//       balance += amount
//       transactionsList.push({ type: 'deposit', 'amount': amount })
//       return amount;
//     },

//     withdraw(amount) {
//       if (amount > balance) {
//         amount = balance;
//       }

//       balance -= amount;
//       transactionsList.push({ type: 'withdrawal', 'amount': amount })
//       return amount;
//     },

//     balance() {
//       return balance;
//     },

//     number() {
//       return this.accountNumber;
//     },

//     transactions() {
//       return transactionsList;
//     },
//   };
// }

function makeBank() {
  let nextAccountNumber = 101;

  function makeAccount(number) {
  // Note how the solution leverages a closure to have the number method use the
  // value passed to the makeAccount function.
    let balance = 0;
    let transactions = [];
    
    return {
      // balance: 0,
      // transactions: [],
  
      deposit(amount) {
        balance += amount
        transactions.push({ type: 'deposit', 'amount': amount })
        return amount;
      },
  
      withdraw(amount) {
        if (amount > balance) {
          amount = balance;
        }
  
        balance -= amount;
        transactions.push({ type: 'withdrawal', 'amount': amount })
        return amount;
      },
  
      balance() {
        return balance;
      },
  
      number() {
        return number;
      },
  
      transactions() {
        return transactions;
      },
    };
  }

  return {
    accounts: [],
    
    openAccount() {
      let account = makeAccount(nextAccountNumber);
      nextAccountNumber += 1;
      this.accounts.push(account);
      return account;
    },

    transfer(source, destination, amount) {
      source.withdraw(amount);
      destination.deposit(amount);
      return amount;
    },
  };
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.deposit(17));
// 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [{...}]