import About from "@/sections/About"
import Features from "@/sections/Features"
import Hero from "@/sections/Hero"
import Testimonial from "@/sections/Testimonial"
import GoogleMaps from "@/components/GoogleMaps"
import Team from "../sections/Team"
import { useDarkMode } from '../context/DarkModeContext';

const Home = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
      <div style={darkMode ? {backgroundColor :"black", color:"white"} : {backgroundColor:"white", color:"black"}}>
      <Hero />
      <GoogleMaps />
      <Features />
      <About />
      <Team />
      </div>
      {/* <Testimonial /> */}
    </>
  )
}

export default Home