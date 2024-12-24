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
import {apiKey} from "./Services/secrets";

function App() {

  // the city for search result
  const [city, setCity] = useState(null);

  // search result that send to show in city page
  const [SearchResult, setSearchResult] = useState(null);

  // condition for show help modal 
  const [showHelp , setShowHelp] = useState(false);


// get the result of search one city
  useEffect(() => {
    if (city != null) {
 
      async function searchTemp(city) {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
          .then(response => response.json())
        // .then(json => console.log(json));

        setSearchResult(await data)
      }
      searchTemp(city);
    }

  }, [city])



  return (
    <MyContext.Provider value={{ city, setCity, SearchResult, setSearchResult , showHelp , setShowHelp}}>
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
