import React from 'react';

export const Cart = ({ itemList, setItemList }) => {

  let amount = 0;

  itemList.forEach(item => {
     amount = amount+Number(item.split('₹')[1]);

  });
  

  // Function to handle deleting an item
  const handleDelete = (index) => {
    // Filter out the item at the specified index
    const updatedItemList = itemList.filter((_, i) => i !== index);
    setItemList(updatedItemList); // Update the state with the filtered list
    localStorage.setItem('itemList', JSON.stringify(updatedItemList));
  };

  return (
    <div className='container'>
      <ul className='list'>
        {itemList.map((item, index) => (
          <li className='listItem' key={index}>
            {item}
            <i 
              className="fa fa-close close" 
              aria-hidden="true" 
              onClick={() => handleDelete(index)}
              style={{ cursor: 'pointer' }}
            ></i>
          </li>
        ))}
      </ul>
      <h6 className='subtotal'>Subtotal: ₹{amount}</h6>
    </div>
  );
};
