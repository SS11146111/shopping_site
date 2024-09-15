import React from 'react'
import ImgW1 from "../assets/imgw1.png";
import ImgW2 from "../assets/imgw2.png";
import ImgW3 from "../assets/imgw3.png";
import ImgW4 from "../assets/imgw4.png";
import ImgW5 from "../assets/imgw5.png";
import ImgW6 from "../assets/imgw6.png";
import ImgW7 from "../assets/imgw7.png";
import ImgW8 from "../assets/imgw8.png";
import {Add} from "./Add";

export const Webcam = ({itemList, setItemList}) => {
    
  return (
        <div className="grid-container webcamC">
            <div className="webcam"><img src={ImgW1} alt="item" width="200" height="200"/><h5>Webcam1-@499/-</h5><Add item="webcam1" price="499" itemList={itemList} setItemList={setItemList}/></div>
            <div className="webcam"><img src={ImgW2} alt="item" width="200" height="200"/><h5>Webcam2-@599/-</h5><Add item="webcam2" price="599" itemList={itemList} setItemList={setItemList}/></div>
            <div className="webcam"><img src={ImgW3} alt="item" width="200" height="200"/><h5>Webcam3-@399/-</h5><Add item="webcam3" price="399" itemList={itemList} setItemList={setItemList}/></div>  
            <div className="webcam"><img src={ImgW4} alt="item" width="200" height="200"/><h5>Webcam4-@999/-</h5><Add item="webcam4" price="999" itemList={itemList} setItemList={setItemList}/></div>
            <div className="webcam"><img src={ImgW5} alt="item" width="200" height="200"/><h5>Webcam5-@499/-</h5><Add item="webcam5" price="499" itemList={itemList} setItemList={setItemList}/></div>
            <div className="webcam"><img src={ImgW6} alt="item" width="200" height="200"/><h5>Webcam6-@699/-</h5><Add item="webcam6" price="699" itemList={itemList} setItemList={setItemList}/></div>
            <div className="webcam"><img src={ImgW7} alt="item" width="200" height="200"/><h5>Webcam7-@499/-</h5><Add item="webcam7" price="499" itemList={itemList} setItemList={setItemList}/></div>
            <div className="webcam"><img src={ImgW8} alt="item" width="200" height="200"/><h5>Webcam8-@699/-</h5><Add item="webcam8" price="699" itemList={itemList} setItemList={setItemList}/></div>
        </div>
  )
}
