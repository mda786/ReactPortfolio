import './intro.scss'
import { init } from 'ityped'
import React,{ useEffect ,useRef} from 'react'
export default function Intro() {
  const textRef=useRef()
  useEffect(()=>{
    init(textRef.current, 
      { showCursor: true,
        backDelay:1500,
        backSpeed:60, 
        strings: ['MERN Developer','APP Developer','Programmer']})
  },[])
  return (
    <div className='intro' id='intro'>
        <div className="left">
          <div className="imageContainer">
            <img src="assets/danish.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There,I'm</h2>
            <h1>Md Danish Ashraf</h1>
            <h3>Freelance <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/darrow.png" alt="da" />
          </a>
        </div>
    </div>
  )
}
