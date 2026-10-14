import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-60 overflow-hidden relative bg-red-500 rounded-xl'>
      <img className='h-full w-full object-cover' src={props.img} alt=""></img>
      <RightCardContent id={props.id} intro={props.intro} color={props.color} tag={props.tag}/>
    </div>
  )
}

export default RightCard
