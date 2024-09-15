import React from 'react'
import CarouselP from "./CarouselP"
import Logo from "../assets/imgB.png"
import { Neckband } from './Neckband';
import { Headset } from './Headset';
import { GHeadset} from './GHeadset';
import { Webcam } from './Webcam';


export const Product = ({itemList, setItemList}) => {
    
    var item = window.location.href.split(':')[3];


    if(item === "offer")
    {
        return (
            <div className='productPage'>
              <CarouselP/>
              <img src={Logo} alt="logo" className='logoTag'/>
            </div>
          );
    }
    else if(item === "neckband")
    {
        return (
            <div>
              <Neckband itemList={itemList} setItemList={setItemList}/>
            </div>
          );
    }
    else if(item === "xyzheadset")
      {
          return (
              <div>
                <Headset itemList={itemList} setItemList={setItemList}/>
              </div>
            );
      }
      else if(item === "webcam")
        {
            return (
                <div>
                  <Webcam itemList={itemList} setItemList={setItemList}/>
                </div>
              );
        }
      
      else if(item === "gheadset")
        {
            return (
                <div>
                  <GHeadset itemList={itemList} setItemList={setItemList}/>
                </div>
              );
        }
      
    
    
  }
