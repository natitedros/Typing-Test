import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import NavBar from "./navbar";
import Home from "./home";
import About from "./about";
import PageNotFound from "./PageNotFound";

function App() {
  const [isLightThemed, setIsLightThemed] = useState<boolean>(true);

  const handleThemeToggle: () => void = () => {
    setIsLightThemed(!isLightThemed);
  };
  let bgColor = isLightThemed ? "bg-white-200" : "bg-gray-700";
  bgColor += " transition-colors duration-500";
  return (
    <Router>
      <div className={`${bgColor} h-screen`}>
        <NavBar
          handleThemeToggle={handleThemeToggle}
          isLightThemed={isLightThemed}
        />
        <div>
          <Routes>
            <Route path="/" element={<Home isLightThemed={isLightThemed} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
