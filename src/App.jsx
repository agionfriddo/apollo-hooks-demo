import { Routes, Route } from "react-router-dom";
import Continents from "./Continents";
import Countries from "./Countries";
import CountriesByContinent from "./CountriesByContinent";
import ContinentsWithCodeVariable from "./CountriesWithCodeVariable";
import Country from './Country';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:code" element={<Country />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/continents/:code" element={<CountriesByContinent />} />
        <Route path="/continentsWithCodeVariable" element={<ContinentsWithCodeVariable />} />
      </Routes>
    </div>
  );
}

export default App;
