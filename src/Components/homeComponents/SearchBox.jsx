import React from 'react'

import cloudImg from "../../images/cloud.png";
import { useRef , useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import {Link} from "react-router-dom";

function SearchBox() {

  const search = useRef(null);

  const info = useContext(MyContext);
  
  
  const searchHandle = ()=>{
 
    info.setCity(search.current.value);
    
  }

  return (
  <div className='w-full flex justify-center'>
      <div className='w-96 h-72 mt-5 flex flex-col items-center justify-around'>
          <img src={cloudImg} className='w-32 h32' alt="" />
          <h1 className='text-xl text-white text-3xl'>سامانه وضعیت آب و هوا کشور</h1>
          <div className='bg-slate-900 w-full h-9 shadow-xl shadow-inner flex justify-between rounded-xl'>
            <input type="text" className='w-11/12 h-full outline-0 text-white px-3' style={{background : "none", border : "none"}} placeholder='نام شهر را جستجو کنید...' ref={search}/>
            <Link to={"/city"} onClick={()=>searchHandle()} className='w-1/12 h-full flex justify-center items-center'>
            <i className='fa fa-search text-sky-400 cursor-pointer'></i>
            </Link>
          </div>
      </div>
  </div>
  )
}

export default SearchBox