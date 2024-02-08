"use client";
import { Box } from "@mui/system";
import logo from "../../../assets/images/logo02.png";
import Image from "next/image";
import Link from "next/link";

// import vanilla css
import "./Sidebar.css";

// icons
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useEffect } from "react";

const Sidebar = () => {
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((navItem) => {
      navItem.addEventListener("click", () => {
        navItems.forEach((item) => {
          item.className = "nav-item";
        });
        navItem.className = "nav-item active";
      });
    });
  }, []);

  return (
    <Box>
      {/* logo */}
      <div className="hidden md:flex justify-center mt-5">
        <Image
          width={30}
          height={30}
          priority
          sx={{ height: "auto" }}
          src="https://raw.githubusercontent.com/ecemgo/mini-samples-great-tricks/main/fitness-app-dashboard/images/app-logo.png"
          alt="dashboard-logo"
        />
      </div>

      {/* Routes */}
      <div>
      
         {/* Route one */}
         <ul>
          <li className="nav-item active">
            <Link href="/dashboard">
              <HomeIcon sx={{ fontSize: "28px" }} />
            </Link>
          </li>

          {/* Route Two */}
          <li className="nav-item ">
            <Link href="/manage-users">
              <ManageAccountsIcon sx={{ fontSize: "28px" }} />
            </Link>
          </li>

          {/* Route Three */}
          <li className="nav-item ">
            <Link href="/manage-payments">
              <MonetizationOnIcon sx={{ fontSize: "28px" }} />
            </Link>
          </li>

          {/* Route four */}

          <li className="nav-item ">
            <Link href="/manage-progress">
              <WidgetsIcon sx={{ fontSize: "28px" }} />
            </Link>
          </li>
        </ul>


        {/* logout button */}
        <span>
        <LogoutIcon
            sx={{ color: "white", fontSize: "28px", margin: "0px 25px" }}
          />
        </span>
        
       
      </div>
    </Box>
  );
};
export default Sidebar;
