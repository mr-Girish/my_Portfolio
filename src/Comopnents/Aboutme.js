import React from 'react'
import pic from '../images/pic.jpeg'
const Aboutme = () => {
  return (
    <>
        <div className='flex border-8 border-red-500'>
            <div className='image_side border-8 border-yellow-300'>
                <img src={pic} alt="" />
            </div>
            <div className='aboutMe boder-8 border-green-600'>
                <img src={pic} alt="" />
            </div>
        </div>
    </>
  )
}

export default Aboutme