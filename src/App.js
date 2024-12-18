import './App.css';

// import tools 
import { MyContext } from "./context/MyContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import HomePage from "./pages/HomePage";
import City from "./pages/City";
import AllCities from "./pages/AllCities";


function App() {
  return (
    <MyContext.Provider value={{}}>
    <BrowserRouter>
      <Routes>

        <Route index element={<HomePage />} />
        <Route path="/City" element={<City/>} />
        <Route path="/AllCities" element={<AllCities />} />
        
      </Routes>
    </BrowserRouter>
  </MyContext.Provider>
  );
}

export default App;
