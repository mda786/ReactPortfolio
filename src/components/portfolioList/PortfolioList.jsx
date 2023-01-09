import './portfolioList.scss'

export default function Portfolio(props) {
  return (
    <li className={props.active?'portfolioList active':'portfolioList'} onClick={()=>
      props.setselected(props.id)
    } >
        {props.title}
    </li>
  )
}
