const express = require('express');
const router = express.Router();
const TransactionManager = require('transactionmanager');

// Get all transactions
router.get('/', (req, res) => {
  const transactions = TransactionManager.getTransactions();
  res.json(transactions);
});

// Add a new transaction
router.post('/', (req, res) => {
    const { id, date, description, amount, type } = req.body;
    const tr = TransactionManager.addTransaction(id, date, description, amount, type);
    res.json(tr);
  });

// Delete a transaction
router.delete('/:transaction_id', (req, res) => { // example: http://localhost:3000/transactions/632878
  const { transaction_id } = req.params;
  const result = TransactionManager.deleteTransaction(transaction_id);
  if (result) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;