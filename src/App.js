import './App.css';

// import tools 
import { MyContext } from "./context/MyContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

// import pages
import HomePage from "./pages/HomePage";
import City from "./pages/City";
import AllCities from "./pages/AllCities";

// import api keys that this file is in gitignore
import { apiKey } from "./Services/secrets";


// import most visited city data
// import {mostVisitedCity} from "./Services/MostVisited"
// import {allCity} from "./Services/allCities";

function App() {

  // the city for search result
  const [city, setCity] = useState(null);

  // search result that send to show in city page
  const [SearchResult, setSearchResult] = useState(null);

  // condition for show help modal 
  const [showHelp, setShowHelp] = useState(false);

  // get most visited cities data and set state
  const [mostVisited, setMostVisited] = useState([]);




  // get the result of search one city
  useEffect(() => {
    if (city != null) {

      async function searchTemp(city) {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
          .then(response => response.json())

        setSearchResult(await data)
      }
      searchTemp(city);
    }

  }, [city])


// get data of most visited citeis 


useEffect(() => {
  const cities = ["tehran", "karaj", "tabriz", "mashhad"];
  
  const fetchWeatherData = async () => {
    let weatherData = []; 
    
    for (let city of cities) {
      try {
      
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        
      
        if (!response.ok) {
          throw new Error(`Error fetching data for ${city}: ${response.statusText}`);
        }

        const data = await response.json();
        
        weatherData.push(data); 
      } catch (error) {
        weatherData.push({ name: city, error: error.message }); 
      }
    }


    setMostVisited(weatherData);
    
  };

  fetchWeatherData(); 
}, [apiKey]); 




  return (
    <MyContext.Provider value={{ city, setCity, SearchResult, setSearchResult, showHelp, setShowHelp, mostVisited, setMostVisited }}>
      <BrowserRouter>
        <Routes>

          <Route index element={<HomePage />} />
          <Route path="/City" element={<City />} />
          <Route path="/AllCities" element={<AllCities />} />

        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
