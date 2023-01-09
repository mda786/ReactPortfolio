import './testimonials.scss'
import {data} from './testimonialsList'
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";


export default function Testimonials() {
  return (
    <div className='testimonials' id='testimonials'>
        <h1>Testimonials</h1>
        <div className="container">
          {data.map(item=>(
          <div className={(item.featured)?'card featured':'card'} key={item.id}>
            <div className="top">
              <div className='top1'>
                <a href="#intro"><CallMissedOutgoingIcon className='hover'/></a>
              </div>
              <div className='top2'>
                <img src={item.img} alt="" className='middle'/>
              </div>
              <div className='top3'>
              <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><FacebookIcon className='hover'/></a>
              <a href="https://www.twitter.com/" rel="noreferrer" target="_blank"><TwitterIcon className='hover'/></a>
              <a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><InstagramIcon className='hover'/></a>
              </div>
            </div>
            <div className="center">
                <p>{item.desc}</p>
            </div>
            <div className="bottom">
                <h3>{item.name}</h3>
                <h4>{item.position}</h4>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}
