import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./scenes/Login/login";
import Signup from "./scenes/Login/signup";
import Welcome from "./scenes/workoutscreens/welcome";
import Homepage from "./scenes/homepage";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-blue-100">
      <Router>
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        <Routes>
        <Route path="/login" element={ <Login />}/>
        <Route path="/signup" element={ <Signup />}/>
        <Route path="/welcome" element={ <Welcome />}/>
        <Route path="/" element={ <Homepage setSelectedPage={setSelectedPage}/>}/>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
