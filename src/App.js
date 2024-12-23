import './App.css';

// import tools 
import { MyContext } from "./context/MyContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

// import pages
import HomePage from "./pages/HomePage";
import City from "./pages/City";
import AllCities from "./pages/AllCities";

// import {getData} from "./Services/Weather";


function App() {

  // the city for search result
  const [city, setCity] = useState(null);


  const [SearchResult, setSearchResult] = useState(null);



  useEffect(() => {
    if (city != null) {
      // let data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45b93825690fab5c96474be7508da6eb`)
      //   .then(response => response.json());


      // setSearchResult(data)
      // console.log(SearchResult);



      async function searchTemp(city) {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45b93825690fab5c96474be7508da6eb`)
          .then(response => response.json())
        // .then(json => console.log(json));

        setSearchResult(await data)


      }

      searchTemp(city);

    }



  }, [city])

  return (
    <MyContext.Provider value={{ city, setCity, SearchResult, setSearchResult }}>
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
