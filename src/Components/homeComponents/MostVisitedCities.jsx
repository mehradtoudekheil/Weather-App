import React from 'react'

function MostVisitedCities() {
  return (
    <div className='w-6/12 h-48 mt-10 rounded-xl shadow-inner shadow-xl shadow-gray-950'>
    <h6 className='text-center pt-3 text-sky-400'>
        شهر های پر بازدید
    </h6>
    <div className='w-full grid gap-3 mt-5 grid-cols-4 px-3'>
        <div className='col-1 h-28 shadow-sm shadow-gray-950 rounded-xl'>
          <p className='text-white text-center mt-3'>تهران</p>
          <p className='text-sky-400 text-center mt-3' dir='ltr'>-27 <sup className  ='text-2xl'>.</sup></p>
        </div>
        <div className='col-1 h-28 shadow-sm shadow-gray-950 rounded-xl'>
          <p className='text-white text-center mt-3'>کرج</p>
          <p className='text-sky-400 text-center mt-3' dir='ltr'>25 <sup className  ='text-2xl'>.</sup></p>
        </div>
        <div className='col-1 h-28 shadow-sm shadow-gray-950 rounded-xl'>
          <p className='text-white text-center mt-3'>مشهد</p>
          <p className='text-sky-400 text-center mt-3' dir='ltr'>25 <sup className  ='text-2xl'>.</sup></p>
        </div>
        <div className='col-1 h-28 shadow-sm shadow-gray-950 rounded-xl'>
          <p className='text-white text-center mt-3'>تبریز</p>
          <p className='text-sky-400 text-center mt-3' dir='ltr'>25 <sup className  ='text-2xl'>.</sup></p>
        </div>
      </div>
  </div>
  )
}

export default MostVisitedCities