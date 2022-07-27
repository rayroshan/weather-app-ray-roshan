import { Routes, Route } from "react-router-dom";
import City from "./pages/City";

function App() {
  return (
    <Routes>
      <Route path="/" element={<City />} />
      <Route path="/:city" element={<City />} />
    </Routes>
  );
}

export default App;
