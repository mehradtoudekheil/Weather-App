import React from 'react'
// import tools
import { useContext } from 'react'
import { MyContext } from '../context/MyContext';

// import components
import Header from '../Components/homeComponents/Header';

function City() {

  // using context 
  const info = useContext(MyContext);
  const data = info.SearchResult;

  // check the city name isnt null - first time its null
  if (data != null) {
    // convert temp to Celsius
    let temp = data.main.temp;
    temp = Math.floor(temp - 273.15);

    // set icon img 
    let icon = data.weather[0].icon;
    icon = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    // min and max temp 
    let maxTemp = data.main.temp_max;
    maxTemp = Math.floor(maxTemp - 273.15);

    let minTemp = data.main.temp_min;
    minTemp = Math.floor(minTemp - 273.15);

    return (
      <div className='w-full h-screen'>
        <Header/>
       <div className='w-100 flex justify-center items-center mt-10'>
       <div className='w-80 h-110 px-10 py-5 rounded-xl shadow-2xl shadow-sky-700 flex flex-col items-center'>
          <h2 className='text-center text-sky-400 text-2xl'>{data.name}</h2>
          <img src={icon} alt="weather status icon" />
          <h5 className='text-center text-5xl text-white relative flex'>
            <sup className='absolute'>
              <i className=''></i>
            </sup>
            {temp}
          </h5>
          <div className='w-full flex justify-between mt-5'>
            <p className='text-gray-300'>وضعیت : </p>
            <p className='text-white'>{data.weather[0].main}</p>
          </div>
          <p className='text-sm text-sky-400'>{data.weather[0].description}</p>
          <div className='flex w-full justify-between mt-5'>
            <p className='text-gray-300'>فشار : </p>
            <p className='text-white'>{data.main.pressure}</p>
          </div>
          <div className='flex w-full justify-between mt-5'>
            <p className='text-gray-300'>رطوبت :  </p>
            <div className='flex flex-row-reverse'>
              <p className='text-white'>{data.main.humidity}</p>
              <i className="fa fa-tint mx-2 mt-0.5 text-sky-400"></i>
            </div>
          </div>
          <div className=''>
            <p className='text-center text-white my-5'>بیشترین و کمترین دما</p>
            <div className='flex text-white'>
              <span className='flex mx-2'>
                <i className='fa fa-angle-up text-green-600 mx-2 font-bold'></i>
                <p className='text-white'>{maxTemp}</p>
              </span>
              /
              <span className='flex mx-2'>
              <p className='text-white'>{minTemp}</p>
                <i className='fa fa-angle-down text-red-600 mx-2 font-bold'></i>
               
              </span>
            </div>
          </div>
        </div>
       </div>
      </div>
    )
  }

}




export default City