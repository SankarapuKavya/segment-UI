import React from 'react'

const RightCardContent = (props) => {
    console.log(props.intro)
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8  flex flex-col justify-between'>
        <h2 className='bg-white rounded-full text-m font-semibold h-8 w-8 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-white text-shadow-3xs mb-10 text-l leading-relaxed'>{props.intro}</p>
            <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-1 rounded-full text-lg '>{props.tag}</button>
            <button style={{backgroundColor:props.color}} className=' text-white font-medium px-2 py-1 rounded-full'><i className="ri-arrow-right-line"></i></button>
        </div>
        </div>
        
      </div>
  )
}

export default RightCardContent
