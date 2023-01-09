import './works.scss'
import {data} from './workList'
import { useState } from 'react'
export default function Works() {
  const [currSlide,setCurrSilde]=useState(0)
  const handleClick=(way)=>{
    (way==='left')?setCurrSilde(currSlide>0 ? currSlide-1: (data.length-1)):
    setCurrSilde(currSlide<(data.length-1)?currSlide+1:0)
  }
  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform:`translateX(-${currSlide*100}vw)`}}>
          {data.map(item=>(
        <div className="container" key={item.id}>
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  {item.icon}
                </div>
                  <h2>{item.title}</h2>
                  <p>
                    {item.desc}
                  </p>
                  <span>Projects</span>
              </div>
            </div>
            <div className="right">
                  <img src={item.img} alt="" />
            </div>
          </div>
        </div>
      ))}
      </div>
      <img src="assets/arrow.png" alt="" className='arrow left' onClick={()=>handleClick('left')}/>
      <img src="assets/arrow.png" alt="" className='arrow right' onClick={()=>handleClick()}/>
    </div>
  )
}
