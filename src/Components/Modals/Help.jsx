import React from 'react'
import { useContext } from 'react';
import {MyContext} from "../../context/MyContext";


function Help() {

  const info = useContext(MyContext);

  const handleClose = ()=>{
    info.setShowHelp(false);
    
  }

    return (
      <div className='w-full h-screen bg-gray-600/75 absolute top-0 left-0 flex justify-center items-center'>
       <div className='w-96 h-110 bg-gray-900 rounded-2xl px-5'>
        <div className='w-full mt-3'>
          <button onClick={()=>handleClose()}>
            <i className='fa fa-times text-red-500'></i>
          </button>
        </div>
        <h6 className='text-white text-center mt-1'>
          سلام  به برنامه تشخیص آب و هوا خوش آمدید
        </h6>
        <p className='text-right mt-10 text-gray-300'>
          برای دریافت اطلاعات شهر مورد نظر خودتون ، اسم شهر را داخل باکس جستجو وارد کنید و روی علامت ذره بین کلیک کنید.
        </p>
        <p className='text-right mt-10 text-gray-300'>
          توجه داشته باشید برای شهر های ایران و همچنین شهر های معروف مانند پایتخت های جهان از کیبورد فارسی هم میتوانید استفاده کنید.
        </p>
        <p className='text-right mt-10 text-gray-300'>
          اطلاعات گرم ترین و سرد ترین شهر ایران و همچنین برخی از کلان شهر ها در صفحه اصلی قرار گرفته و شما با کلیک کردن به روی هر کدام از آنها میتوانید صفحه مربوط به آن را ببینید.
        </p>
       </div>
      </div>
    )
  }

export default Help;