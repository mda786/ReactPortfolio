import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { useEffect, useState } from 'react'
import {featuredList,webList,appList,designList,brandingList} from '../../data'
export default function Portfolio() {
  const [selected,setSelected]=useState('feature')
  const [data,setData]=useState([])
  const list=[
    {
        id:'feature',
        title:'Featured'
    },
    {
        id:'web',
        title:'Web App'
    },
    {
        id:'mobile',
        title:'Mobile App'
    },
    {
        id:'design',
        title:'Design'
    },
    {
        id:'branding',
        title:'Branding'
    }
  ]
  useEffect(()=>{
    switch(selected){
      case 'feature':
        setData(featuredList)
        break
      case 'web':
        setData(webList)
        break
      case 'mobile':
        setData(appList)
        break
      case 'design':
        setData(designList)
        break
      case 'branding':
        setData(brandingList)
        break
      default :
        setData(featuredList)
    }
  },[selected])
  return (
    <div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          {list.map(item=>(
            <PortfolioList
              key={item.id} 
              id={item.id} 
              active={selected===item.id}
              setselected={setSelected}
              title={item.title} 
            />
          ))}
        </ul>
        <div className="container">
          {data.map((item)=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}
