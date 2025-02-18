import bg from "@/assets/banner.svg"
import image from "@/assets/bg.jpg"
import Search from "@/components/Search"
import earth from "@/assets/earth.svg"
const Hero = () => {
  return (
    <>
    <div  style={{display:"flex",flexWrap:"wrap", alignItems:"center",justifyContent:"space-between",width:"100%",padding:"1rem",marginTop:"-2rem"}}>
        <h1 style={{fontSize:"3.5rem", fontWeight:"bold"}} className="text-primary">Share the Ride <br /> Save the Planet</h1>
        <img src={image}  alt="hero" width="40%" />
        <img src={earth} alt="" width="25%" />
    </div>
    </>
  )
}

export default Hero