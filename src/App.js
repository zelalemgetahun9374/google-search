import { useState } from "react";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import Footer from "./components/Footer";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
