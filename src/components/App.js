import React, { useState } from 'react';
import style from '../style/main.module.css';
import data from '../data';
import Friends from './Friends';
import Bill from './Bill';
const App = () => {
  const [friend, setFriend] = useState(data);
  const [isBillOpen, setBillOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [payMe, setPayMe] = useState([]);
  const [payFriend, setPayFriend] = useState([]);

  const newFriend = (newFriend) => {
    setFriend((friend) => [...friend, newFriend]);
  };
  const handleSelect = (friendId) => {
    const data = friend.find((item) => item.id === friendId);
    if (data) {
      setBillOpen((isBillOpen) => !isBillOpen);
      setSelectedItem(data);
    }
  };
  const handlePay = (id, expense, friendsAmount, pay) => {
    const data = friend.find((item) => item.id === id);
    console.log(friendsAmount, pay);
    pay === 'You' ? (data.balance = friendsAmount) : (data.balance = -expense);
    const updateFriendPayment = friend.map((friend) =>
      friend.id === id ? (friend = data) : friend
    );
    setFriend(updateFriendPayment);
  };
  return (
    <div className={style.container}>
      <h2 className={style.header}>Eat-N-Split</h2>
      <div className={style.main}>
        <Friends
          friend={friend}
          onAdd={newFriend}
          onSelect={handleSelect}
          payMe={payMe}
          payFriend={payFriend}
        />
        {isBillOpen && (
          <Bill
            item={selectedItem}
            setPayMe={setPayMe}
            setPayFriend={setPayFriend}
            onPay={handlePay}
          />
        )}
      </div>
    </div>
  );
};

export default App;
