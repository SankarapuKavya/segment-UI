import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-6 flex overflow-x-auto rounded-4xl flex-nowrap gap-10 w-2/3 '>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} intro={elem.intro} color={elem.color} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
