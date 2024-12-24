import React from 'react'

// import components 
import Header from "../Components/homeComponents/Header";
import SearchBox from "../Components/homeComponents/SearchBox";
import MostVisitedCities from '../Components/homeComponents/MostVisitedCities';
import MaxMinTemp from '../Components/homeComponents/MaxMinTemp';
import Help from '../Components/Modals/Help';

// import tools
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

function HomePage() {

  const info = useContext(MyContext);

  return (
    <div className='relative'>
      <Header/>
      <SearchBox/>
      <section className='w-full flex justify-between px-10'>
        <MostVisitedCities/>
        <MaxMinTemp/>
      </section>
      {info.showHelp && <Help/>}
    </div>
  )
}

export default HomePage