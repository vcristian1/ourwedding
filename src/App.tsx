import Navbar from "./scenes/navbar";
import Home from "./scenes/home";
import OurClasses from "./scenes/ourClasses";
import Benefits from "./scenes/benefits";
import ContactUs from "./scenes/contactUs"
import Footer from "./scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Registry from "./scenes/registry";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

 useEffect(() => {
  const handleScroll = () => {
  // We use window.scrollY to check if we are at the top of the page, if it is at 0 we are at the top.
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home)
    }
    if (window.scrollY === 0) {
      setIsTopOfPage(false);
    }
  }
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll)
 }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <Registry setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
