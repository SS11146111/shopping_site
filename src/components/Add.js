

export const Add = ({ item, price, itemList, setItemList }) => { // Destructure the props to access the 'item'
   // Initialize as an array

  const handleClick = () => {
    item=item+" - ₹"+price;
    setItemList([...itemList, item]); // Add 'item' to the 'itemList'
    localStorage.setItem('itemList', JSON.stringify(itemList));
   
  };


  
  return (
    <div>
        <button className='add' onClick={handleClick}>Add to Cart</button>
    </div>
  )
}
