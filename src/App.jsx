import Navbar from "./components/Navbar.jsx";
import {useState} from "react";
import Hero from "./components/Hero.jsx";
import TrustedBy from "./components/TrustedBy.jsx";

function App() {
  const [theme , setTheme] = useState(localStorage.getItem('theme') || 'light')

  return (
    <div className="dark:bg-black relative ">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
        <TrustedBy/>
    </div>
  )
}

export default App
