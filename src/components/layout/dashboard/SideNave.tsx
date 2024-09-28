import {
 
  Home,
  LayoutDashboard,
  // MessageCircleMore,
  // Upload,
} from "lucide-react";
// import { CgProfile } from "react-icons/cg";
// import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import { FaCheckToSlot, FaUsers } from "react-icons/fa6";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
//   import Image from "next/image";
//   import logo from "../../assests/icons/logo.png";
//   import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { useGetUserSingleQuery } from "@/redux/api/userApi/userApi";
import { FaCodeCompare } from "react-icons/fa6";
//   import useAuth from "@/Hooks/useAuth";
//   import useGetAllUsers from "@/Hooks/useGetAllUsers";
interface Items {
  id: number;
  name: string;
  icon: JSX.Element;
  path: string;
}

// type UserRole = "admin" | "user"; 
const SideNave = () => {
  const userEmail = useAppSelector((store)=>store.user.user.email)
  console.log(userEmail)
const {data}=useGetUserSingleQuery(userEmail)
  console.log(data?.data?.role)
  const pathname = usePathname();
  // const [users, loading, refetch] = useGetAllUsers(); //get user from mongodb
  // const { user } = useAuth(); //current or loggedin user
  // console.log(user);
  // const currentUser = users.find(
  //   (singleUser) => singleUser.email === user.email
  // );
  // const users= "user" as string
  const adminMenuList: Items[] = [
    {
      id: 1,
      name: "Dashboard",
      icon: <LayoutDashboard />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "All Service",
      icon:<MdOutlineMiscellaneousServices />,
      path: "/dashboard/servicedb",
    },
    {
      id: 3,
      name: "All Slot",
      icon: <FaCheckToSlot />,
      path: "/dashboard/slotDb",
    },
    {
      id: 4,
      name: "All User",
      icon: <FaUsers />,
      path: "/dashboard/userDb",
    }
  ];
  const usermenu: Items[] = [
    {
      id: 1,
      name: "Dashboard",
      icon: <LayoutDashboard />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Booking Info",
      icon:<MdOutlineMiscellaneousServices />,
      path: "/dashboard/bookinginfo",
    },
    {
      id: 3,
      name: "Service Slot",
      icon: <FaCheckToSlot />,
      path: "/dashboard/serviceslot",
    },
    {
      id: 4,
      name: "Compare Service",
      icon: <FaCodeCompare />,
      path: "/dashboard/compare",
    },
   
  ];

  
  // console.log(userMenuList);

  const anotherMenu: Items[] = [
    {
      id: 1,
      name: "Home",
      icon: <Home />,
      path: "/",
    },
   
  ];

  return (
    <div className="h-screen bg-slate-700 w-[60%] md:w-64 fixed z-50 shadow-sm bg-custom-blue-1 mt-20 md:mt-0 overflow-y-auto">
      <div className=" p-3">
        <div className="flex items-center gap-1">
          {/* <Image
              src={logo}
              className="w-[40px] h-[40px] md:w-[40px] md:h-[50px]"
              alt="DrivePulse Logo"
            /> */}
          <div className="">
            {/* <h2
                style={{ letterSpacing: "2px" }}
                className="font-bold text-blue-400 text-[20px] md:text-2xl">
                DRIVE
              </h2> */}
            {/* <p
                style={{ letterSpacing: "4px" }}
                className="text-[14px] md:text-[20px] font-medium -mt-2 text-slate-300">
                PULSE
              </p> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 gap-2">
        {data?.data?.role === "admin" ? (
          <>
            {adminMenuList.map((item, index) => (
              <Link
                to={item?.path}
                key={index}
                className={`${
                  pathname === item.path ? "text-primary" : "text-slate-200"
                } `}
              >
                <button
                  className={`flex items-center gap-2 w-full hover:bg-gray-600 px-4 py-2 rounded-md  font-medium `}
                >
                  <h2 className="p-2 text-2xl text-white bg-primary rounded-xl">
                    {item?.icon}
                  </h2>
                  <h2 className="font-medium">{item?.name}</h2>
                </button>
              </Link>
            ))}
          </>
        ) : (
          <>
            {usermenu.map((item, index) => (
              <Link
                to={item?.path}
                key={item?.id}
                className={`${
                  pathname === item.path ? "text-primary" : "text-slate-200"
                } `}
              >
                <button
                  className={`flex items-center gap-2 w-full hover:bg-gray-600 px-4 py-2 rounded-md  font-medium `}
                >
                  <h2 className="p-2 text-2xl text-white bg-primary rounded-xl">
                    {item?.icon}
                  </h2>
                  <h2 className="font-medium">{item?.name}</h2>
                </button>
              </Link>
            ))}
          </>
        )}
      </div>
      <hr className="my-5" />
      <div className="flex flex-col gap-2">
        {anotherMenu.map((item, index) => (
          <Link
            to={item?.path}
            key={item?.id}
            className={`${
              pathname === item.path ? "text-primary" : "text-slate-200"
            } `}
          >
            <button
              className={`flex items-center gap-2 w-full hover:bg-gray-600 px-4 py-2 rounded-md  font-medium `}
            >
              <h2 className="p-2 text-2xl text-white bg-primary rounded-xl">
                {item?.icon}
              </h2>
              <h2 className="font-medium">{item?.name}</h2>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNave;
