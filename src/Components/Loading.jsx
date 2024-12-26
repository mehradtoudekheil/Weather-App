import React from 'react'

function Loading() {
  return (
    <div>
        <div className='w-80 h-110 bg-gray-800/75 rounded-2xl p-5 animate-pulse flex flex-col items-center'>
          <div className='bg-gray-600 w-40 h-10 rounded-2xl mt-5 animate-pulse'></div>
          <div className='bg-gray-900 w-10 h-10 rounded-full mt-5 animate-pulse'></div>
          <div className='bg-gray-600 w-full h-10 rounded-full mt-5 animate-pulse'></div>
          <div className='bg-gray-600 w-full h-10 rounded-full mt-5 animate-pulse'></div>
          <div className='bg-gray-900 w-40 h-10 rounded-2xl mt-5 animate-pulse'></div>
          <div className='bg-gray-600 w-full h-10 rounded-full mt-5 animate-pulse'></div>
          <div className='bg-gray-600 w-full h-10 rounded-full mt-5 animate-pulse'></div>

        </div>
    </div>
  )
}

export default Loading