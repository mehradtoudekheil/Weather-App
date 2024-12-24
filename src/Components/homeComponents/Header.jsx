import React from 'react'

import {Link} from "react-router-dom"; 
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';

function Header() {

  const info = useContext(MyContext);

  

  const handleShow = ()=>{
    info.setShowHelp(true)
    console.log(0);
    
  }

  return (
    <div className='w-full h-16 shadow-xl flex justify-between items-center px-5'>
      <Link to={"/"}>
      <i className='fa fa-home text-xl text-white cursor-pointer'></i>
      </Link>
      <button onClick={()=>handleShow()}>
      <i className='fa fa-question-circle text-xl text-sky-400 cursor-pointer'></i>
      </button>
    </div>
  )
}

export default Header