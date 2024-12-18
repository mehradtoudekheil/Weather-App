import React from 'react'

// import components 
import Header from "../Components/homeComponents/Header";
import SearchBox from "../Components/homeComponents/SearchBox";
import MostVisitedCities from '../Components/homeComponents/MostVisitedCities';
import MaxMinTemp from '../Components/homeComponents/MaxMinTemp';


function HomePage() {
  return (
    <div className=''>
      <Header/>
      <SearchBox/>
    </div>
  )
}

export default HomePage