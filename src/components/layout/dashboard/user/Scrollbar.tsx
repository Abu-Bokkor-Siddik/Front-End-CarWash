import { useEffect, useState } from "react";


const Scrollbar = () => {
    const [isVasible,setIsVisible]=useState(false)
    const handleScroll= ()=>{
    if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // top
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div>
      {
        isVasible&&<button className="btn btn-neutral " onClick={scrollToTop}>Go Top</button>
      }
    </div>
  )
}

export default Scrollbar
