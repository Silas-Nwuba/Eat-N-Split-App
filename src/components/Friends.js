import React, { useState } from 'react';
import FriendList from './FriendList';
import Form from '../components/Form';
import style from '../style/main.module.css';
const Friends = ({ friend, onAdd, onSelect }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="friends">
      {friend.map((friend) => (
        <FriendList key={friend.id} item={friend} onSelect={onSelect} />
      ))}

      <button
        type="button"
        className={style.add}
        style={
          isOpen
            ? { backgroundColor: 'darkred' }
            : { backgroundColor: '#ff8d20' }
        }
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {isOpen ? 'Close' : 'New Friend'}
      </button>
      {isOpen && <Form onAdd={onAdd} />}
    </div>
  );
};

export default Friends;
