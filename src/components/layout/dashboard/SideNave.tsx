import { Home, LayoutDashboard } from "lucide-react";

import { FaCheckToSlot, FaUsers } from "react-icons/fa6";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { useGetUserSingleQuery } from "@/redux/api/userApi/userApi";
import { FaCodeCompare } from "react-icons/fa6";

interface Items {
  id: number;
  name: string;
  icon: JSX.Element;
  path: string;
}

// type UserRole = "admin" | "user";
const SideNave = () => {
  const userEmail = useAppSelector((store) => store.user.user.email);
  console.log(userEmail);
  const { data } = useGetUserSingleQuery(userEmail);
  console.log(data?.data?.role);

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
      icon: <MdOutlineMiscellaneousServices />,
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
    },
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
      icon: <MdOutlineMiscellaneousServices />,
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
          <div className=""></div>
        </div>
      </div>
      <div className="flex flex-col mt-5 gap-2">
        {data?.data?.role === "admin" ? (
          <>
            {adminMenuList.map((item, index) => (
              <Link
                to={item?.path}
                key={index}
                // className={`${
                //   pathname === item.path ? "text-primary" : "text-slate-200"
                // } `}
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
            {usermenu.map((item) => (
              <Link
                to={item?.path}
                key={item?.id}
                // className={`${
                //   pathname === item.path ? "text-primary" : "text-slate-200"
                // } `}
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
        {anotherMenu.map((item) => (
          <Link
            to={item?.path}
            key={item?.id}
            // className={`${
            //   pathname === item.path ? "text-primary" : "text-slate-200"
            // } `}
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
