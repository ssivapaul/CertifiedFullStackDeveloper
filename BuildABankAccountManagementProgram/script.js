class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  deposit(amnt) {
    if (amnt > 0) {
      this.transactions.push({ type: "deposit", amount: amnt });
      this.balance += amnt;
      return `Successfully deposited $${amnt}. New balance: $${this.balance}`;
    } else {
      return `Deposit amount must be greater than zero.`;
    }
  }
  withdraw(amnt) {
    if (amnt > 0 && this.balance >= amnt) {
      this.transactions.push({ type: "withdraw", amount: amnt });
      this.balance -= amnt;
      return `Successfully withdrew $${amnt}. New balance: $${this.balance}`;
    }
    if (amnt <= 0 || this.balance < amnt) {
      return `Insufficient balance or invalid amount.`;
    }
  }
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    return `Deposits: ${this.transactions
      .filter((t) => t.type === "deposit")
      .map((t) => `${t.amount}`)}`;
  }

  listAllWithdrawals() {
    return `Withdrawals: ${this.transactions
      .filter((t) => t.type === "withdraw")
      .map((t) => `${t.amount}`)}`;
  }
}

let myAccount = new BankAccount();
myAccount.deposit(355);
myAccount.deposit(35);
myAccount.deposit(103);
myAccount.withdraw(14);
myAccount.withdraw(63);
myAccount.withdraw(28);

console.log(myAccount.checkBalance());
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());

console.log(myAccount.transactions);
