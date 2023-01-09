import { useState } from 'react';
import './contact.scss'

export default function Contact() {
  const [message,setMessage]=useState(false)
  const handleClick=(e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
        <div className="left">
          <img src="assets/contact.svg" alt="" />
        </div>
        <div className="right">
            <h2>Contact</h2>
            <form>
              <input type="text" placeholder='Your name'/>
              <input type="email" placeholder='Your email'/>
              <textarea placeholder='Message'  rows="5"></textarea>
              <button type='submit' onClick={handleClick}>Send</button>
              {message && <span>Thanks,I'll reply soon.</span>}
            </form>
        </div>
    </div>
  )
}
