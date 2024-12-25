import React from 'react'
import { useContext , useEffect , useState} from 'react'
import { MyContext } from '../../context/MyContext'
import {Link} from "react-router-dom";


function MostVisitedCities() {

  const info = useContext(MyContext);
const [isLoading , setIsLoading] = useState(true);

useEffect(() => {
  if (info.mostVisited.length > 0) {
    setIsLoading(false); 
  }
}, [info.mostVisited]);

  const cityName = (city) =>{
    let persianName;
    switch(city){
      case "Tehran" : 
       persianName = "تهران";
      break;
      case "Mashhad" : 
       persianName ="مشهد";
      break;
      case "Karaj" : 
       persianName = "کرج";
      break;
      case "Tabriz" : 
       persianName ="تبریز";
      break;
    }
    return persianName;
  }

  return (
    <div className='w-6/12 h-48 mt-10 rounded-xl shadow-inner shadow-xl shadow-gray-950'>
      <h6 className='text-center pt-3 text-sky-400'>
        شهر های پر بازدید
      </h6>
      <div className='w-full grid gap-3 mt-5 grid-cols-4 px-3'>
        {isLoading ? (<p>loading</p>
        ) : (info.mostVisited.map(item=>{
           return <Link to={"/city"} onClick={()=>info.setCity(item.name)}  className='col-1 h-28 shadow-sm shadow-gray-950 rounded-xl'>
             <p className='text-white text-center mt-3'>{cityName(item.name)}</p>
             <p className='text-sky-400 text-center mt-3' dir='ltr'>{Math.floor(item.main.temp - 273.15)} <sup className  ='text-2xl'>.</sup></p>
            </Link>
          }))
        }
      </div>
    </div>
  )
}

export default MostVisitedCities;




