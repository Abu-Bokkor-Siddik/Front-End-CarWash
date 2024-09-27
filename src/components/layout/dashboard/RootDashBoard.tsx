import { Outlet } from "react-router-dom"
import SideNave from "./SideNave"
import DashboardNav from "./DashboardNav"

const RootDashBoard = () => {
  return (
    <div>
        <DashboardNav></DashboardNav>
        
      <div className="lg:flex ">
      <div className=" hidden lg:block md:block   bg-gray-100">
      <SideNave></SideNave>
      </div>
      <div className="flex-1 pt-40 lg:pt-20  p-6 max-w-[1100px] lg:max-w-[1400px]   mx-auto overflow-auto">
      <Outlet></Outlet>
      </div>
      </div>
    </div>
  )
}

export default RootDashBoard
