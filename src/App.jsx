import { Routes, Route } from "react-router-dom";
import Continents from "./Continents";
import ContinentsLazy from "./ContinentsLazy";
import Countries from "./Countries";
import CountriesByContinent from "./CountriesByContinent";
import Country from './Country';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:code" element={<Country />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/continents/:code" element={<CountriesByContinent />} />
        <Route path="/continentsLazy" element={<ContinentsLazy />} />
      </Routes>
    </div>
  );
}

export default App;
