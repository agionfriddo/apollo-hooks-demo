import { Routes, Route } from "react-router-dom";
import Countries from "./Countries";
import Country from './Country';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:code" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
