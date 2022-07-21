import React from 'react'

const Heading = (props) => {
  return (
    <div className='w-full p-6 text-2xl italic font-semibold'>{props.heading}</div>
  )
}

export default Heading