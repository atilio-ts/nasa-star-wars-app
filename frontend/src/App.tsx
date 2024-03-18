import Navbar from "@/components/navbar";
import Home from "@/components/home"
import Nasa from "@/components/nasa";
import StarWars from "@/components/starwars";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/types";

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
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Nasa setSelectedPage={setSelectedPage} />
      <StarWars setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;