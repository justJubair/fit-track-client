"use client"
import { Box, Stack } from "@mui/system";
import logo from "../../assets/images/logo02.png"
import Image from "next/image";


const Sidebar = () => {
    return(
        <Box>
            {/* logo */}
            <div className="flex justify-center mt-5">
            <Image width={145} sx={{ height: "auto" }} priority src={logo} alt="dashboard-logo"/>
            </div>
        
        </Box>
    )}
export default Sidebar;