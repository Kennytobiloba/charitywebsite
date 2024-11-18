import HomePage from "@/components/HomePage";

import AboutPage from "@/components/AboutPage";
import Help from "@/components/Help";
import Education from "@/components/Education";
import Learn from "@/components/Learn";
import Volunters from "@/components/Volunters";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    
         <div className="max-w-[100%] overflow-hidden">
          
          <HomePage/>
          <Help/>
          <AboutPage/>
          <Education/>
          <Learn/>
          <Volunters/>
          <Footer/>


         </div>
  );
}
