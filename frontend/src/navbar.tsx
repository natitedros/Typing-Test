import { useState } from "react";
interface NavBarProps {}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  const [selectedBar, setSelectedBar] = useState<number>(0);
  const [isLightThemed, setIsLightThemed] = useState<boolean>(true);

  const handleButtonClick = (index: number) => {
    setSelectedBar(index);
  };

  const handleThemeToggle = () => {
    setIsLightThemed(!isLightThemed);
  };

  const getButtonClass = (index: number) => {
    if (isLightThemed) {
      if (selectedBar === index) {
        return "text-green-500 border-b-4 border-green-500";
      } else {
        return "text-gray-500 hover:text-green-500 transition duration-300";
      }
    } else {
      if (selectedBar === index) {
        return "text-yellow-500 border-b-4 border-yellow-500";
      } else {
        return "text-gray-500 hover:text-yellow-500 transition duration-300";
      }
    }
  };
  const navTheme = isLightThemed
    ? "bg-white shadow-lg"
    : "bg-gray-800 shadow-lg";
  const logoColor = isLightThemed ? "text-green-500" : "text-yellow-500";
  return (
    <nav className={navTheme}>
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex justify-between">
          <div className="items-center">
            <button className="flex items-center py-4 px-2">
              <img
                src="./images/house.png"
                alt="Logo"
                className="h-8 w-8 mr-2"
              />
              <span className={`font-bold text-xl ${logoColor}`}>
                Typing Test
              </span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleButtonClick(0)}
              className={`py-4 px-2 font-semibold ${getButtonClass(0)}`}
            >
              Home
            </button>
            <button
              onClick={() => handleButtonClick(1)}
              className={`py-4 px-2 font-semibold ${getButtonClass(1)}`}
            >
              Services
            </button>
            <button
              onClick={() => handleButtonClick(2)}
              className={`py-4 px-2 font-semibold ${getButtonClass(2)}`}
            >
              About
            </button>
            <button
              onClick={() => handleButtonClick(3)}
              className={`py-4 px-2 font-semibold ${getButtonClass(3)}`}
            >
              Contact Us
            </button>
          </div>
          <div className="flex items-center">
            <button onClick={handleThemeToggle} className="h-7 w-7">
              <img src="./images/theme.png" alt="theme" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
