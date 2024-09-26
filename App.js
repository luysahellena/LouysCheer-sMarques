import React from 'react';
import NavBar from './src/Components/navBar';
import ItemListContainer from './ItemListContainer';

const Apps = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Welcome to our app!" />
    </div>
  );
};

export default Apps;