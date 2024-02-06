import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import { Grid } from "@mui/material";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Grid container minHeight="100vh">
        {/* sidebar */}
        <Grid item xs={1} bgcolor="#1565c0">
          <Sidebar />
        </Grid>

        {/* Dashboard content */}
        <Grid item xs={11} bgcolor="green">
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardLayout;
