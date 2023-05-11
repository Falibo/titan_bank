class Transaction {
  constructor(id, date, description, amount, type) {
    this.id = Math.floor(Math.random() * 100);
    //this.id = id;
    this.date = date;
    this.description = description;
    this.amount = amount;
    this.type = type;
  }
}

let transactions = [
  new Transaction('50', '2022-05-01', 'Salary', 5000, 'credit'),
  new Transaction('14', '2022-05-02', 'Rent', -1000, 'debit'),
  new Transaction('120', '2022-05-03', 'Grocery', -200, 'debit'),
  new Transaction('130', '2022-05-01', 'Bonus', 500, 'credit'),
  new Transaction('10', '2022-05-02', 'Dinner', -100, 'debit'),
  new Transaction('26', '2022-05-03', 'Snack', -20, 'debit'),
  new Transaction('77', '2022-05-01', 'Freelance', 1600, 'credit')
];

function getTransactions() {
  return transactions;
}

function addTransaction(id, date, description, amount, type) {
  const transaction = new Transaction(
    date,
    description,
    amount,
    type
  );
  transactions.push(transaction);
  return transaction;
}

function deleteTransaction(id) {
  const index = transactions.findIndex(t => t.id === parseInt(id));
  if (index !== -1) {
    transactions.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {  Transaction, getTransactions, addTransaction, deleteTransaction };