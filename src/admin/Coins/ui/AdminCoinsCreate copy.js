import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CoinsBloc from '../bloc/CoinsBloc';

const AdminCoinsCreate = () => {
  const history = useHistory();
  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');
  const [abbr, setAbbr] = useState('');
  const [address, setAddress] = useState('');

  const onCoinsForm = async (e) => {
    e.preventDefault();
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append('image', icon);

    // CREATE IMG
    const isCoins = await CoinsBloc.createImg(formData);

    if (isCoins.success) {
      // GET IMAGE
      const icon = isCoins.data.image;

      // CREATE TEXT
      await CoinsBloc.createText({
        icon,
        name,
        abbr,
        address
      });
      history.push('/admin-coins');
    }
    console.log('clicked!!');
  };

  return (
    <div>
      <form onSubmit={onCoinsForm}>
        <h1>CREATE COIN</h1>
        <input
          type="file"
          placeholder="icon"
          onChange={(e) => setIcon(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="abbr"
          onChange={(e) => setAbbr(e.target.value)}
        />
        <input
          type="text"
          placeholder="address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminCoinsCreate;
