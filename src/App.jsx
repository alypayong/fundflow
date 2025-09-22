import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./index.css";

export default function App() {
  // demo state (replace with real data later)
  const [transactions, setTransactions] = useState([]);
  const [form, setForm] = useState({ date: "", description: "", amount: "", type: "expense" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    setTransactions([
      { transactionId: "1", date: "2025-01-01", description: "fund raising", amount: "200", type: "income" },
      { transactionId: "2", date: "2025-02-02", description: "Posters", amount: "50", type: "expense" },
    ]);
  }, []);

  function addTransaction(e) {
    e.preventDefault();
    const newT = { ...form, transactionId: Date.now().toString() };
    setTransactions((s) => [newT, ...s]);
    setForm({ date: "", description: "", amount: "", type: "expense" });
    setStatus("Saved (local demo)");
    setTimeout(() => setStatus(""), 2000);
  }

  return (
    <div className="app-root">
      <Nav current="Dashboard" />

      <main className="container">
        <section className="hero">
          <h1>Welcome to FundFlow</h1>
          <p className="sub">Your all-in-one finance and fund tracking dashboard.</p>
        </section>

        <section className="card form-card">
          <h2>Add Transaction</h2>
          <form onSubmit={addTransaction} className="form">
            <label>
              Date
              <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
            </label>
            <label>
              Description
              <input type="text" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
            </label>
            <label>
              Amount
              <input type="number" step="0.01" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} required />
            </label>
            <label>
              Type
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </label>
            <div className="form-actions">
              <button type="submit">Add</button>
              <span className="status">{status}</span>
            </div>
          </form>
        </section>

        <section className="card">
          <h2>Transactions</h2>
          <table className="txn-table">
            <thead><tr><th>Date</th><th>Description</th><th>Amount</th><th>Type</th></tr></thead>
            <tbody>
              {transactions.map(t => (
                <tr key={t.transactionId}>
                  <td>{t.date}</td>
                  <td>{t.description}</td>
                  <td>{t.amount}</td>
                  <td>{t.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
