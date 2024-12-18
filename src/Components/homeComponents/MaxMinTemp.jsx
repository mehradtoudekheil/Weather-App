import React from 'react'

function MaxMinTemp() {
  return (
    <div className='w-4/12 h-48 mt-10 rounded-xl shadow-inner shadow-xl shadow-gray-950'>
      <h6 className='text-center pt-3 text-sky-400'>
        گرم ترین و سرد ترین نقطه کشور
      </h6>
      <div className='w-full flex mt-5 flex justify-around'>
        <div className='w-4/12 h-28 shadow-sm shadow-gray-950 rounded-xl'>
          <p className='text-white text-center mt-3'>اردبیل</p>
          <p className='text-green-400 text-center mt-3' dir='ltr'>-27 <sup className  ='text-2xl'>.</sup></p>
        </div>
        <div className='w-4/12 h-28 shadow-sm shadow-gray-950 rounded-xl'>
          <p className='text-white text-center mt-3'>اهواز</p>
          <p className='text-red-400 text-center mt-3' dir='ltr'>25 <sup className  ='text-2xl'>.</sup></p>
        </div>
      </div>
    </div>
  )
}

export default MaxMinTemp