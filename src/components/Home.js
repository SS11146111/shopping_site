import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgA from "../assets/imgA.png";
import Img1 from "../assets/img4.png";
import Img2 from "../assets/img5.png";
import Img3 from "../assets/img6.png";
import Img4 from "../assets/img7.png";
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate();


    const handleClick = (item) => {

        navigate(`/product?item=${item}`);
    }

  return ( 
    <div className='main'>
        <div className="grid-container">
            <div className="item1" onClick={() => handleClick("offer")}><img src={ImgA} alt="item" width="500" height="500"/><h5>BIG BANG OFFER - BUY for <span>&#8377;</span>999, GET <span>&#8377;</span>499 FREE!</h5></div>
            <div className="item2" onClick={() => handleClick("neckband")}><img src={Img1} alt="item" width="200" height="200"/><h5>Neckband-@<span>&#8377;</span>999</h5></div>
            <div className="item3" onClick={() => handleClick("xyzheadset")}><img src={Img2} alt="item" width="200" height="200"/><h5>XYZ Headset-@<span>&#8377;</span>1999</h5></div>  
            <div className="item4" onClick={() => handleClick("webcam")}><img src={Img3} alt="item" width="200" height="200"/><h5>Portable WebCam-@<span>&#8377;</span>899</h5></div>
            <div className="item5" onClick={() => handleClick("gheadset")}><img src={Img4} alt="item" width="200" height="200"/><h5>Gaming Headset-@<span>&#8377;</span>599</h5></div>
        </div>
    </div>
  )
}
