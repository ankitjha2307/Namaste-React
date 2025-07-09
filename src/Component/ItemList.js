import React from 'react';

const ItemList = (props) => {
  const {items, title} = props;
  return (
    <div className='menu-category'>
      <div className='info'>
         <div className="title">
                {title} ({title?.length || 0})
          </div>
          <div className="arrow">⬇️</div>
      </div>
      
      
      <div className='item-list'>
        {items.map((item) => (
        <div className='border' key={item.card.info.id}>
          <div>
            <span>{item.card.info.name}</span>
            <span> Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
          </div>
          <div>
             {/* <p>{item.card.info.description}</p> */}
          </div>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default ItemList;
