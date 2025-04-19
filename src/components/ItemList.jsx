import React from 'react';
import Item from './Item';

const ItemList = ({ data }) => {
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap">
      {data.map(({ id, title, price, pictureUrl, description, stock }) => (
        <Item
          key={id}
          id={id}
          title={title}
          price={price}
          pictureUrl={pictureUrl}
          description={description}
          stock={stock}
        />
      ))}
    </div>
  );
};

export default ItemList;
