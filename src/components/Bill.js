import React, { useState } from 'react';
import style from '../style/main.module.css';
const Bill = ({ item, onPay }) => {
  const { id, name } = item;
  const fullname = name.split(' ');
  const firstname = fullname[0];
  const [billAmount, setBillAmount] = useState('');
  const [expense, setExpenses] = useState('');
  const [pay, setPay] = useState('You');
  let friendsAmount;
  billAmount && expense
    ? (friendsAmount = Number(billAmount) - Number(expense))
    : (friendsAmount = '');

  const handleSubmitBill = (e) => {
    e.preventDefault();
    if (!billAmount || !expense) return;
    onPay(id, expense, friendsAmount, pay);
    setBillAmount('');
    setExpenses('');
    friendsAmount = '';
    setPay('You');
  };
  return (
    <div className={style.bill}>
      <h1>
        Split A Bill with{' '}
        {firstname.charAt(0).toUpperCase() + firstname.slice(1)}
      </h1>
      <form onSubmit={handleSubmitBill}>
        <div>
          <label htmlFor="bill-value">Bill value</label>
          <input
            type="text"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="bill-expenses">Your expense</label>
          <input
            type="text"
            value={expense}
            onChange={(e) => setExpenses(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="friend-expense">{firstname} expense</label>
          <input type="text" disabled value={friendsAmount}></input>
        </div>
        <div>
          <label htmlFor="bill-value">Who is paying the bill?</label>
          <select value={pay} onChange={(e) => setPay(e.target.value)}>
            <option>{pay}</option>
            <option>{firstname}</option>
          </select>
        </div>
        <button>Split</button>
      </form>
    </div>
  );
};

export default Bill;
