import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2 style={{ color: '#333', fontSize: '24px' }}>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;