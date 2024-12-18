import React from 'react'

import cloudImg from "../../images/cloud.png";

function SearchBox() {
  return (
  <div className='w-full flex justify-center'>
      <div className='w-96 h-72 bg-white mt-5 flex flex-col'>
          <img src={cloudImg} className='w-32 h32' alt="" />
          <h1 className='text-xl'>سامانه وضعیت آب و هوا کشور</h1>
      </div>
  </div>
  )
}

export default SearchBox