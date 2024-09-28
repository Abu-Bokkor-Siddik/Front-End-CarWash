import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { logOut } from "@/redux/features/userSlice";
import {  toast } from 'sonner'
const Navbar = () => {
  const dispatch = useAppDispatch();
  const handle =async()=>{
    await dispatch(logOut({}));
    toast.success("successfully LogOut ",{duration:2000})
   
  }
  return (
    <div className="z-30   ">
      <div className="drawer z-50  fixed  bg-white  border ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content   flex flex-col">
          {/* Navbar */}
          <div
            className="w-auto  h-auto lg:h-20 navbar   "
          >
            {/**navbar 1200px */}
            <div className=" w-full  lg:max-w-[1200px]  mx-auto ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block bg-slate-100  w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className=" flex flex-1   px-2 mx-2">
                {/**here is logo and nav bar  */}
                <div className="flex   lg:justify-start items-center  ">
                  <div className="flex justify-center items-center gap-4">
                    <img
                      className="w-10 h-10 lg:w-40 lg:h-40 rounded-lg"
                      src="https://i.ibb.co.com/D5J6VK2/Navy-and-Blue-Modern-Car-Wash-Logo-2-removebg-preview.png"
                      alt="logo"
                    />
                    {/* <p className="font-bold text-2xl font-mono">Car Washing</p> */}
                  </div>
                </div>
              </div>
              <div className="flex-none  hidden lg:block">
                <div className="menu  menu-horizontal">
                  {/* Navbar menu content here */}

                  <div className="flex  gap-10 justify-center items-center  ">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="service">Service</NavLink>
                    <NavLink to="booking">Booking</NavLink>
                    <NavLink to="dashboard">Dashboard</NavLink>

                    <NavLink to="login">Login</NavLink>
                    <Button onClick={handle} >LogOut</Button>
                  </div>
                  {/** user name and profile would be here  */}

                  <div className="flex gap-3 justify-center items-center  "></div>
                </div>
              </div>
              {/**end */}
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side  ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-[#DFF6FF] p-4 w-80 min-h-full ">
            {/* Sidebar content here */}
            <div className="flex flex-col gap-2">
              <NavLink to="/">Home</NavLink>
              <NavLink to="booking">Booking</NavLink>
              <NavLink to="service">Service</NavLink>
              <NavLink to="dashboard">Dashboard</NavLink>
              <NavLink to="login">Login</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
