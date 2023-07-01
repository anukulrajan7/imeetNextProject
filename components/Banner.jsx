import Image from 'next/image'
import React from 'react'


function Banner({children}) {
  return (
    <div className='bg-cover w-full bg-center h-[50vh]' style={{backgroundImage:`url(${children})`}}>
       
    </div>
  )
}

export default Banner