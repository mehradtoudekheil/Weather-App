import React from 'react'

import { useContext } from 'react'
import { MyContext } from '../context/MyContext'

function City() {

  const info = useContext(MyContext);

  const data = info.SearchResult;
  
 if(data != null ){
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-80 h-96 p-10 rounded-xl shadow-2xl shadow-sky-700'>
        <h2 className='text-center text-sky-400 text-2xl'>{data.name}</h2>

      </div>
    </div>
  )
}
  
 }
  

 

export default City