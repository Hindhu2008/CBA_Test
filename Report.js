import React, { useEffect, useState } from 'react';
import './Report.css';
import TaskManager from './TaskManager'; // Replace with the correct file path
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';

const ReportPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [showTaskManager, setShowTaskManager] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://148.251.225.118:3200/api/detailed-transaction', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.ok) {
          setTransactions(data.transaction.transaction_list);
          setLoading(false);
        } else {
          console.error('Error fetching transactions:', data.res_desc);
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>
        <center>Report Page</center>
        <br />
        <br />
      </h1>
    <Link to="/task-manager">Task Manager</Link> 
    <Routes>
    <Route path="/task-manager" element={<TaskManager />} />
    </Routes>  
      {showTaskManager && <TaskManager />}
      <table className="center">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Payment Mode</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.paymentMode}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportPage;
