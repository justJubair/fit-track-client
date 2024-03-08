"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// import vanilla css
import "./Sidebar.css";

// icons
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import PoolIcon from "@mui/icons-material/Pool";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getSingleUser } from "@/api/getSingleUser";

const Sidebar = () => {
  const [user, setUser] = useState({})
  // active route
  const pathname = usePathname();
  const {data:session} = useSession()


  useEffect(()=>{
    const getUser = async()=>{
      const res = await getSingleUser(session?.user?.email)
      setUser(res)
    }
    getUser()
  },[session?.user?.email])

  

  // responsive drawer sidebar
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
     
      {/* logo */}
      {openSidebar &&  <div
            onClick={() => setOpenSidebar(!openSidebar)}
            className={`flex justify-center bg-blue-950 ${openSidebar ? "fixed z-50 p-2 lg:p-4 rounded-xl top-4 left-4" : "relative pt-5"}`}
          >
            <Image
              width={25}
              height={25}
              priority
              sx={{ height: "auto" }}
              src="https://raw.githubusercontent.com/ecemgo/mini-samples-great-tricks/main/fitness-app-dashboard/images/app-logo.png"
              alt="dashboard-logo"
            />
          </div>}
      
      <div
        className={`fixed z-50 min-h-screen flex flex-col duration-300 justify-between bg-blue-950 ${
          openSidebar ? "-ml-24" : "-ml-0"
        }`}
      >
        {/* Routes */}
        <div>
        <div
            onClick={() => setOpenSidebar(!openSidebar)}
            className="flex justify-center pt-5"
          >
            <Image
              width={30}
              height={30}
              priority
              sx={{ height: "auto" }}
              src="https://raw.githubusercontent.com/ecemgo/mini-samples-great-tricks/main/fitness-app-dashboard/images/app-logo.png"
              alt="dashboard-logo"
            />
          </div>
         

          {/* Route one */}
          <ul>

         {user?.role==="default" && <li
              className={
                pathname == "/dashboard" ? "active nav-item" : "nav-item"
              }
            >
              <Link href="/dashboard">
                <HomeIcon sx={{ fontSize: "28px" }} />
              </Link>
            </li>}

            {user?.role==="trainer" && <li
              className={
                pathname == "/dashboard" ? "active nav-item" : "nav-item"
              }
            >
              <Link href="/dashboard">
                <HomeIcon sx={{ fontSize: "28px" }} />
              </Link>
            </li>}
            

            {/* Route Two */}
            {user?.role==="admin" && <li
              className={
                pathname == "/manage-users" ? "active nav-item" : "nav-item"
              }
            >
              <Link href="/manage-users">
                <ManageAccountsIcon sx={{ fontSize: "28px" }} />
              </Link>
            </li>
}
            
            {/* Route Three */}
            {user?.role==="admin" &&  <li
              className={
                pathname == "/manage-payments" ? "active nav-item" : "nav-item"
              }
            >
              <Link href="/manage-payments">
                <MonetizationOnIcon sx={{ fontSize: "28px" }} />
              </Link>
            </li>}
           

            {/* Route four */}

            {user?.role==="default" && <li
              className={
                pathname == "/manage-progress" ? "active nav-item" : "nav-item"
              }
            >
              <Link href="/manage-progress">
                <WidgetsIcon sx={{ fontSize: "28px" }} />
              </Link>
            </li>}
            

            {/* Route five challenges */}
            {user?.role==="default" &&  <li
              className={
                pathname == "/manage-challenge" ? "active nav-item" : "nav-item"
              }
            >
              <Link href="/manage-challenge">
                <PoolIcon sx={{ fontSize: "28px" }} />
              </Link>
            </li>}

            {user?.role==="trainer" &&  <li
              className={
                pathname == "/manage-challenge" ? "active nav-item" : "nav-item"
              }
            >
              <Link href="/manage-challenge">
                <PoolIcon sx={{ fontSize: "28px" }} />
              </Link>
            </li>}
           
          </ul>
        </div>

        {/* logout button */}
        <Link href="/" className="hover:cursor-pointer">
          <LogoutIcon
            sx={{ color: "white", fontSize: "28px", margin: "0px 30px 50px" }}
          />
        </Link>
      </div>
    </>
  );
};
export default Sidebar;
