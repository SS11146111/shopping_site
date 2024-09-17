import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = ({ itemList }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cart`);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent form submission if inside a form
    if (searchQuery.trim().toLowerCase() === 'neckband') {
      navigate(`/product?item=neckband`);
    }
    else if (searchQuery.trim().toLowerCase() === 'headset') {
      navigate(`/product?item=xyzheadset`);
    }
    else if (searchQuery.trim().toLowerCase() === 'gaming headset') {
      navigate(`/product?item=gheadset`);
    }
    else if (searchQuery.trim().toLowerCase() === 'webcam') {
      navigate(`/product?item=webcam`);
    }
    else
    {
      navigate(`/`);
    }
    

    // Add more conditions for other search queries if needed
  };

  return (
    <div className='header'>
      <div className='logo'>
        <h3>S'Center</h3>
        <h5>One stop destination for all electronics!</h5>
      </div>

      <div className='search'>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder='Search gadget'
            value={searchQuery}
            onChange={handleSearchChange}
            autoComplete='off'
            id="search"
          />
          <button type="submit" style={{ display: 'none' }}>Search</button> {/* Hidden submit button */}
        </form>
      </div>

      <div className='icons'>
        <i
          className="fa fa-shopping-cart cart"
          aria-hidden="true"
          onClick={handleClick}
        ></i>
        <h5 className="count">{itemList.length}</h5>
      </div>
    </div>
  );
};
