import { Outlet } from "react-router-dom"
import Navbar from "../components/share/Navbar"
import Footer from "@/components/share/Footer"


const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
