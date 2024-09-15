import React from 'react';
import ImgN1 from "../assets/imgN1.png";
import ImgN2 from "../assets/imgN2.png";
import ImgN3 from "../assets/imgN3.png";
import ImgN4 from "../assets/imgN4.png";
import ImgN5 from "../assets/imgN5.png";
import ImgN6 from "../assets/imgN6.png";
import ImgN7 from "../assets/imgN7.png";
import ImgN8 from "../assets/imgN8.png";
import { Add } from './Add';


export const Neckband = ({itemList,setItemList}) => {
  
  
  return (
        <div className="grid-container neckbandC">
            <div className="neckband"><img src={ImgN1} alt="item" width="200" height="200"/><h5>Neckband1-@499/-</h5><Add item="neckband1" price="499" itemList={itemList} setItemList={setItemList}/></div>
            <div className="neckband"><img src={ImgN2} alt="item" width="200" height="200"/><h5>Neckband2-@599/-</h5><Add item="neckband2" price="599" itemList={itemList} setItemList={setItemList}/></div>
            <div className="neckband"><img src={ImgN3} alt="item" width="200" height="200"/><h5>Neckband3-@399/-</h5><Add item="neckband3" price="399" itemList={itemList} setItemList={setItemList}/></div>  
            <div className="neckband"><img src={ImgN4} alt="item" width="200" height="200"/><h5>Neckband4-@999/-</h5><Add item="neckband4" price="999" itemList={itemList} setItemList={setItemList}/></div>
            <div className="neckband"><img src={ImgN5} alt="item" width="200" height="200"/><h5>Neckband5-@499/-</h5><Add item="neckband5" price="499" itemList={itemList} setItemList={setItemList}/></div>
            <div className="neckband"><img src={ImgN6} alt="item" width="200" height="200"/><h5>Neckband6-@699/-</h5><Add item="neckband6" price="699" itemList={itemList} setItemList={setItemList}/></div>
            <div className="neckband"><img src={ImgN7} alt="item" width="200" height="200"/><h5>Neckband7-@499/-</h5><Add item="neckband7" price="499" itemList={itemList} setItemList={setItemList}/></div>
            <div className="neckband"><img src={ImgN8} alt="item" width="200" height="200"/><h5>Neckband8-@699/-</h5><Add item="neckband8" price="699" itemList={itemList} setItemList={setItemList}/></div>
        </div>
  )
}
