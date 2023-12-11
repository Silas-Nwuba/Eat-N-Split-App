import React, { useState } from 'react';
const Form = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const getId = (start, range) => {
    let id = Math.floor(Math.random() * range + start);
    while (id > range) {
      id = Math.floor(Math.random() * range + start);
    }
    return id;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    const imageName = image.split('\\')[2];
    const fileName = `/image/${imageName}`;
    const fullname = name.split(' ');
    const firstname = fullname[0];
    const friendObj = {
      id: getId(100, 1000),
      name: name,
      desc: `you and ${firstname} are even`,
      imageUrl: fileName,
      balance: 0,
    };
    if (!name || !image) return;
    onAdd(friendObj);
    setName('');
    setImage('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="friend-name">Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="friend-image">Friend image</label>
        <input type="file" value={image} onChange={handleImage}></input>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;
