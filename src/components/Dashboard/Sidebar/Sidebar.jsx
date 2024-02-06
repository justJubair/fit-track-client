"use client"
import { Box } from "@mui/system";
import logo from "../../../assets/images/logo02.png"
import Image from "next/image";
import Link from "next/link";

// import vanilla css
import "./Sidebar.css"

// icons
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Sidebar = () => {
    return(
        <Box>
            {/* logo */}
            <div className="flex justify-center mt-5">
            <Image width={30} height={30} priority sx={{ height: "auto" }} src="https://raw.githubusercontent.com/ecemgo/mini-samples-great-tricks/main/fitness-app-dashboard/images/app-logo.png" alt="dashboard-logo"/>
            </div>
        
        {/* Routes */}
        <Box>
            {/* Route one */}
            <ul>
                <li className="nav-item active">
                <Link href="dashboard/users">
                    <HomeIcon sx={{fontSize: "28px"}}/>
            </Link>
                </li>
            </ul>
            {/* Route one */}
            <ul>
                <li className="nav-item ">
                <Link href="dashboard/users">
                    <ManageAccountsIcon sx={{fontSize: "28px"}}/>
            </Link>
                </li>
            </ul>
            {/* Route one */}
            <ul>
                <li className="nav-item ">
                <Link href="dashboard/users">
                    <MonetizationOnIcon sx={{fontSize: "28px"}}/>
            </Link>
                </li>
            </ul>
            {/* Route one */}
            <ul>
                <li className="nav-item ">
                <Link href="dashboard/users">
                    <HomeIcon sx={{fontSize: "28px"}}/>
            </Link>
                </li>
            </ul>
         
        </Box>
        </Box>
    )}
export default Sidebar;