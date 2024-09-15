import React from 'react'

export const Footer = () => {

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div className='footer'>
        <h5>About S'Center</h5>
        <div className='logo'>
            <h5>S'Center</h5>
            <h6>One stop destination for all electronics!</h6>
        </div> 
        <div>
            <i className="fa fa-angle-double-up arrow" onClick={handleClick}></i>
        </div>
    </div>
  )
}
