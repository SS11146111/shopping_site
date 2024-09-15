import React from 'react';
import { Add } from './Add';
import ImgH1 from "../assets/imgH1.png";
import ImgH2 from "../assets/imgH2.png";
import ImgH3 from "../assets/imgH3.png";
import ImgH4 from "../assets/imgH4.png";
import ImgH5 from "../assets/imgH5.png";
import ImgH6 from "../assets/imgH6.png";
import ImgH7 from "../assets/imgH7.png";
import ImgH8 from "../assets/imgH8.png";

export const Headset = ({itemList,setItemList}) => {
    
  return (
        <div className="grid-container headsetC">
            <div className="headset"><img src={ImgH1} alt="item" width="200" height="200"/><h5>Headset1-@499/-</h5><Add item="headset1" price="499" itemList={itemList} setItemList={setItemList}/></div>
            <div className="headset"><img src={ImgH2} alt="item" width="200" height="200"/><h5>Headset2-@599/-</h5><Add item="headset2" price="599" itemList={itemList} setItemList={setItemList}/></div>
            <div className="headset"><img src={ImgH3} alt="item" width="200" height="200"/><h5>Headset3-@399/-</h5><Add item="headset3" price="399" itemList={itemList} setItemList={setItemList}/></div>  
            <div className="headset"><img src={ImgH4} alt="item" width="200" height="200"/><h5>Headset4-@999/-</h5><Add item="headset4" price="999" itemList={itemList} setItemList={setItemList}/></div>
            <div className="headset"><img src={ImgH5} alt="item" width="200" height="200"/><h5>Headset5-@499/-</h5><Add item="headset5" price="499" itemList={itemList} setItemList={setItemList}/></div>
            <div className="headset"><img src={ImgH6} alt="item" width="200" height="200"/><h5>Headset6-@699/-</h5><Add item="headset6" price="699" itemList={itemList} setItemList={setItemList}/></div>
            <div className="headset"><img src={ImgH7} alt="item" width="200" height="200"/><h5>Headset7-@499/-</h5><Add item="headset7" price="499" itemList={itemList} setItemList={setItemList}/></div>
            <div className="headset"><img src={ImgH8} alt="item" width="200" height="200"/><h5>Headset8-@699/-</h5><Add item="headset8" price="699" itemList={itemList} setItemList={setItemList}/></div>
        </div>
  )
}
