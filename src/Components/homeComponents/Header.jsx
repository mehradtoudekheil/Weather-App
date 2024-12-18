import React from 'react'

import {Link} from "react-router-dom"; 
 
function Header() {
  return (
    <div className='w-full h-16 shadow-xl flex justify-between items-center px-5'>
      <Link to={"/"}>
      <i className='fa fa-home text-xl text-white cursor-pointer'></i>
      </Link>
      <i className='fa fa-question-circle text-xl text-sky-400 cursor-pointer'></i>
    </div>
  )
}

export default Header