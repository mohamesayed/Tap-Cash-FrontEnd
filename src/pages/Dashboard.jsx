import Sidebar from './Sidebar';
import '../style/Dashboard.css';




import React, { useState } from 'react';


const Dashboard = () => {
  const [balance, setBalance] = useState(30000);
  const [transactionType, setTransactionType] = useState('income');
  const [transactionDescription, setTransactionDescription] = useState('');
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: 'Today',
      description: 'Payment from John Doe',
      amount: 2000,
      type: 'income',
    },
    {
      id: 2,
      date: 'Yesterday',
      description: 'Online purchase - Amazon',
      amount: 400,
      type: 'expense',
    },
    {
      id: 3,
      date: 'May 5, 2023',
      description: 'Payment from Jane Smith',
      amount: 1500,
      type: 'income',
    },
    {
      id: 4,
      date: 'May 4, 2023',
      description: 'Grocery shopping - Walmart',
      amount: 100,
      type: 'expense',
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (transactionType === 'income') {
      setBalance(Math.min(balance + transactionAmount, 30000));
    } else {
      setBalance(Math.max(balance - transactionAmount, 0));
    }

    setTransactions([
      ...transactions,
      {
        id: transactions.length + 1,
        date: new Date().toLocaleDateString(),
        description: transactionDescription,
        amount: transactionAmount,
        type: transactionType,
      },
    ]);

    setTransactionType('income');
    setTransactionDescription('');
    setTransactionAmount(0);
  };

  const handleTransactionTypeChange = (event) => {
    setTransactionType(event.target.value);
  };

  const handleTransactionDescriptionChange = (event) => {
    setTransactionDescription(event.target.value);
  };

  const handleTransactionAmountChange = (event) => {
    setTransactionAmount(parseFloat(event.target.value));
  };

  const user = {
    name: 'Mohammed ',
    email: 'mo@gmail.com',
    avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  };

  return (
    <div className="dashboard-container">
      <Sidebar user={user} />
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Welcome , {user.name}</h1>
        </div>
        <div className="dashboard-balance">
          <h2>Available Balance</h2>
          <h6>${balance.toFixed(2)}</h6>
          <div className="dashboard-balance-actions">
            <button onClick={() => setTransactionType('income')}>Deposit</button>
            <button onClick={() => setTransactionType('expense')}>Withdraw</button>
          </div>
        </div>
        <div className="dashboard-transaction-form">
          <h2>{transactionType === 'income' ? 'Deposit' : 'Withdraw'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="dashboard-transaction-form-row">
              <label htmlFor="transaction-description">Description:</label>
              <input
                type="text"
                id="transaction-description"
                value={transactionDescription}
                onChange={handleTransactionDescriptionChange}
              />
            </div>
            <div className="dashboard-transaction-form-row">
              <label    htmlFor="transaction-amount">Amount:</label>
              <input
                style={{display:'block', width:'200px'}}
                type="number"
                id="transaction-amount"
                value={transactionAmount}
                onChange={handleTransactionAmountChange}
                max={transactionType === 'income' ? 30000 - balance : balance}
                min={transactionType === 'expense' ? 0 : undefined}
              />
            </div>
            <button type="submit">{transactionType === 'income' ? 'Deposit' : 'Withdraw'}</button>
          </form>
        </div>
        <div className="dashboard-transactions">
          <h2>Transaction History</h2>
          <div className="dashboard-transaction-list">
            {transactions.map((transaction) => (
              <div className="dashboard-transaction" key={transaction.id}>
                <div className={`dashboard-transaction-type ${transaction.type}`}>
                  {transaction.type === 'income' ? '+' : '-'}
                </div>
                <div className="dashboard-transaction-details">
                  <div className="dashboard-transaction-description">{transaction.description}</div>
                  <div className="dashboard-transaction-date">{transaction.date}</div>
                </div>
                <div className="dashboard-transaction-amount">{`$${transaction.amount.toFixed(
                  2
                )}`}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;