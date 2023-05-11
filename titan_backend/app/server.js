const express = require('express');
const server = express();
const transactionsRouter = require('./routes/transactions');

server.use(express.json());
server.use('/transactions', transactionsRouter);

server.listen(process.env.PORT || 3000, () => {
  console.log('Server started on port 3000 ...'); //http://localhost:3000/transactions
});