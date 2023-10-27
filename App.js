
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeatherApp from './weather/WeatherApp';
import Navbar from './weather/NavBar';
import About from './weather/About';
function App() {
  return (
    <Router>
      <div className="container">
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<WeatherApp />}>
           </Route>
            
          <Route path="/about" element={<About></About>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
