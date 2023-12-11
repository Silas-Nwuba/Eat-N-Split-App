import React, { useState } from 'react';
import style from '../style/main.module.css';

const FriendList = ({ item, onSelect }) => {
  const { id, name, imageUrl, balance } = item;
  const [isSelected, setSelected] = useState(false);

  const handleToggle = () => {
    onSelect(id);
    setSelected((isSelected) => !isSelected);
  };
  return (
    <section className={style.friendlist}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <img src={imageUrl} alt={name}></img>
        <span>
          <h3>{name}</h3>
          {balance < 0 && (
            <p style={{ color: 'red' }}>
              You own {name.split(' ')[0]} ${Math.abs(balance)}
            </p>
          )}
          {balance > 0 && (
            <p style={{ color: 'green' }}>
              {name.split(' ')[0]} {''} own me ${balance}
            </p>
          )}
          {balance === 0 && <p>you and {name.split(' ')[0]} are even</p>}
        </span>
      </div>
      <button
        type="button"
        style={
          isSelected
            ? { backgroundColor: '#ffa94d' }
            : { backgroundColor: '#ff8d20' }
        }
        onClick={handleToggle}
      >
        {isSelected ? 'Close' : 'Select'}
      </button>
    </section>
  );
};

export default FriendList;
