import React from 'react'
import ImgGH1 from "../assets/imgGH1.png";
import ImgGH2 from "../assets/imgGH2.png";
import ImgGH3 from "../assets/imgGH3.png";
import ImgGH4 from "../assets/imgGH4.png";
import ImgGH5 from "../assets/imgGH5.png";
import ImgGH6 from "../assets/imgGH6.png";
import ImgGH7 from "../assets/imgGH7.png";
import ImgGH8 from "../assets/imgGH8.png";
import {Add} from "./Add";

export const GHeadset = ({itemList, setItemList}) => {
   
  return (
        <div className="grid-container gheadsetC">
            <div className="gheadset"><img src={ImgGH1} alt="item" width="200" height="200"/><h5>GHeadset1-@499/-</h5><Add item="gheadset1" price="499" itemList={itemList} setItemList={setItemList}/></div>
            <div className="gheadset"><img src={ImgGH2} alt="item" width="200" height="200"/><h5>GHeadset2-@599/-</h5><Add item="gheadset2" price="599" itemList={itemList} setItemList={setItemList}/></div>
            <div className="gheadset"><img src={ImgGH3} alt="item" width="200" height="200"/><h5>GHeadset3-@399/-</h5><Add item="gheadset3" price="399" itemList={itemList} setItemList={setItemList}/></div>  
            <div className="gheadset"><img src={ImgGH4} alt="item" width="200" height="200"/><h5>GHeadset4-@999/-</h5><Add item="gheadset4" price="999" itemList={itemList} setItemList={setItemList}/></div>
            <div className="gheadset"><img src={ImgGH5} alt="item" width="200" height="200"/><h5>GHeadset5-@499/-</h5><Add item="gheadset5" price="499" itemList={itemList} setItemList={setItemList}/></div>
            <div className="gheadset"><img src={ImgGH6} alt="item" width="200" height="200"/><h5>GHeadset6-@699/-</h5><Add item="gheadset6" price="699" itemList={itemList} setItemList={setItemList}/></div>
            <div className="gheadset"><img src={ImgGH7} alt="item" width="200" height="200"/><h5>GHeadset7-@499/-</h5><Add item="gheadset7" price="499" itemList={itemList} setItemList={setItemList}/></div>
            <div className="gheadset"><img src={ImgGH8} alt="item" width="200" height="200"/><h5>GHeadset8-@699/-</h5><Add item="gheadset8" price="699" itemList={itemList} setItemList={setItemList}/></div>
        </div>
  )
}
