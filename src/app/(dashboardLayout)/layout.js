import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import { Grid } from "@mui/material";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Grid container minHeight="100vh">
        {/* sidebar */}
        <Grid item xs={0.7} >
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
