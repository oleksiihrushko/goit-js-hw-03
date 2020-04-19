const account = {
  idCounter: 0,
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  createTransaction(amount, type) {
    this.idCounter += 1;
    return {
      id: this.idCounter,
      amount,
      type,
    };
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, 'deposit'));
  },

  withdraw(amount) {
    if (this.balance < amount) {
      console.log('Снятие такой суммы не возможно, недостаточно средств');
    } else {
      this.balance -= amount;
      this.transactions.push(this.createTransaction(amount, 'withdraw'));
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i]['id'] === id) {
        return this.transactions[i];
      }
    }
  },

  getTransactionTotal(type) {
    let transactionTotal = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i]['type'] === type) {
        transactionTotal += this.transactions[i]['amount'];
      }
    }
    return transactionTotal;
  },
};

account.deposit(234);
console.log(`Your balance = ${account.getBalance()}`);
account.withdraw(121);
console.log(`Your balance = ${account.getBalance()}`);
account.deposit(21132);
console.log(`Your balance = ${account.getBalance()}`);
account.withdraw(99999);
console.log(`Your balance = ${account.getBalance()}`);
account.deposit(4534);
console.log(`Your balance = ${account.getBalance()}`);
account.withdraw(23543);
console.log(`Your balance = ${account.getBalance()}`);
account.deposit(2342);
console.log(`Your balance = ${account.getBalance()}`);
console.log(
  `total amount of deposits = ${account.getTransactionTotal('deposit')}`,
);
console.log(
  `total amount of withdraws = ${account.getTransactionTotal('withdraw')}`,
);
console.log(account.getTransactionDetails(5));
