import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import { Grid } from "@mui/material";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Grid container minHeight="100vh">
        {/* sidebar */}
<<<<<<< HEAD
        <Grid item xs={0.7} >
=======
        <Grid item xs={0.7} bgcolor="#000000">
>>>>>>> e91aa7bc10a7accb668b3826d1181dac45732eba
          <Sidebar />
        </Grid>

        {/* Dashboard content */}
        <Grid item xs={11.3} paddingX="2rem">
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardLayout;
