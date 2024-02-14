"use client"
import { usePathname } from "next/navigation";
import { Box } from "@mui/system";
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






const Sidebar = () => {

  const pathname = usePathname()


  return (
    <Box>
      {/* logo */}
      <div className="hidden md:flex justify-center mt-5">
       <Link href="/">
       <Image
          width={30}
          height={30}
          priority
          sx={{ height: "auto" }}
          src="https://raw.githubusercontent.com/ecemgo/mini-samples-great-tricks/main/fitness-app-dashboard/images/app-logo.png"
          alt="dashboard-logo"
        />
       </Link>
      </div>

      {/* Routes */}
      <div>
      
         {/* Route one */}
         <ul>
          <li className={pathname == "/dashboard" ? "active nav-item" : "nav-item"}>
            
            <Link href="/dashboard" >
              <HomeIcon sx={{ fontSize: "28px" }} />
            </Link>
          </li>

          {/* Route Two */}
          <li className={pathname == "/manage-users" ? "active nav-item" : "nav-item"}>
            <Link href="/manage-users">
              <ManageAccountsIcon sx={{ fontSize: "28px" }} />
            </Link>
          </li>

          {/* Route Three */}
          <li className={pathname == "/manage-payments" ? "active nav-item" : "nav-item"}>
            <Link href="/manage-payments">
              <MonetizationOnIcon sx={{ fontSize: "28px" }} />
            </Link>
          </li>

          {/* Route four */}

          <li className={pathname == "/manage-progress" ? "active nav-item" : "nav-item"}>
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
