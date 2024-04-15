import { useState } from "react";
import { Link } from "react-router-dom";
interface NavBarProps {
  handleThemeToggle: () => void;
  isLightThemed: boolean;
}

const NavBar: React.FunctionComponent<NavBarProps> = (props) => {
  const handleTheme = props.handleThemeToggle;
  const isLightThemed = props.isLightThemed;
  const [selectedBar, setSelectedBar] = useState<number>(0);
  const handleButtonClick = (index: number) => {
    setSelectedBar(index);
  };

  const getButtonClass = (index: number) => {
    if (isLightThemed) {
      if (selectedBar === index) {
        return "text-green-700 border-b-4 border-green-700";
      } else {
        return "text-gray-500 hover:text-green-700 transition duration-300";
      }
    } else {
      if (selectedBar === index) {
        return "text-yellow-500 border-b-4 border-yellow-500";
      } else {
        return "text-gray-500 hover:text-yellow-500 transition duration-300";
      }
    }
  };
  const navTheme = isLightThemed ? "bg-white shadow-md" : "bg-gray-800";
  const logoColor = isLightThemed ? "text-green-700" : "text-yellow-500";
  return (
    <nav className={navTheme}>
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="items-center">
            <button className="flex items-center py-4 px-2">
              <img
                src="./images/app_logo.png"
                alt="Logo"
                className="h-10 w-10 mr-2"
              />
              <span className={`font-bold text-xl ${logoColor}`}>
                Typing Test
              </span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <Link to="/">
              <button
                onClick={() => handleButtonClick(0)}
                className={`py-4 px-2 font-semibold ${getButtonClass(0)}`}
              >
                Home
              </button>
            </Link>
            <Link to="/services">
              <button
                onClick={() => handleButtonClick(1)}
                className={`py-4 px-2 font-semibold ${getButtonClass(1)}`}
              >
                Services
              </button>
            </Link>

            <Link to="/about">
              <button
                onClick={() => handleButtonClick(2)}
                className={`py-4 px-2 font-semibold ${getButtonClass(2)}`}
              >
                About
              </button>
            </Link>
            <Link to="/contact">
              <button
                onClick={() => handleButtonClick(3)}
                className={`py-4 px-2 font-semibold ${getButtonClass(3)}`}
              >
                Contact Us
              </button>
            </Link>
          </div>
          <div className="flex items-center">
            <button onClick={handleTheme} className="h-7 w-7">
              <img src="./images/theme.png" alt="theme" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
