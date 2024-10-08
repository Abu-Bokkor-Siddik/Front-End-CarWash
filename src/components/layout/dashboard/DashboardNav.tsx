import { Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import SideNave from "./SideNave";
const DashboardNav = () => {
  const [isToggle, setIsToggle] = useState(false);
  // test just

  // Modifies sidebar position with navbar height
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(
    navbarRef.current?.scrollHeight || 0
  );
  useEffect(() => {
    const scrollHeight = navbarRef.current?.scrollHeight;
    if (scrollHeight) {
      setNavbarHeight(scrollHeight);
    }
  }, []);

  return (
    <>
      <div
        ref={navbarRef}
        className="flex z-50 lg:hidden md:hidden w-full max-w-5xl mx-auto fixed top-2 items-center justify-between px-4 py-2 glass shadow gap-2 rounded-lg ml-3 bg-slate-800"
      >
        <button onClick={() => setIsToggle(!isToggle)}>
          <Menu className="md:hidden text-white" />
        </button>
        <div className="relative">
          <label htmlFor="Search" className="sr-only">
            {" "}
            Search{" "}
          </label>

          <span className="absolute inset-y-0 w-10 end-0 grid place-content-center">
            <button type="button" className="text-gray-300 hover:text-gray-400">
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>

        <div>{/* <Notification /> */}</div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <div className="flex items-center gap-2 btn btn-ghost">
              {/* user avatar */}
              <div className="w-10 h-10 avatar online">
                <div className="rounded-full">
                  {/* <Image
                    src={user?.photoURL || img}
                    height={40}
                    width={40}
                    alt="User avatar"
                    style={{ objectFit: "cover" }}
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content divide-y shadow-md z-[1] menu p-2 bg-base-100 border rounded-box w-52"
          >
            <li>
              <a className="mx-auto">
                {/* user info */}
                {/* <div className="text-center">
                  <h4 className="text-sm font-normal">{user?.displayName}</h4>
                  <h5 className="text-xs font-semibold">{user?.email}</h5>
                </div> */}
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`absolute transition-all duration-500 top-[${navbarHeight}]  ${
          isToggle ? "block" : "hidden"
        } flex-col w-[60%] min-w-[280px] h-full  md:hidden`}
      >
        <SideNave />
      </div>
    </>
  );
};

export default DashboardNav;
