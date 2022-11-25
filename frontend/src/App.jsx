import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Travel from "./pages/Travel";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Results from "./pages/Results";
import ResultsElmer from "./pages/ResultsElmer";
import ResultsToulouse from "./pages/ResultsToulouse";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/results" element={<Results />} />
        <Route path="/elmer" element={<ResultsElmer />} />
        <Route path="/Toulouse" element={<ResultsToulouse />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
