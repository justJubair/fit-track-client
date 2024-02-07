import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import { Grid } from "@mui/material";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Grid container minHeight="100vh">
        {/* sidebar */}
        <Grid item xs={0.7} bgcolor="#1565c0">
          <Sidebar />
        </Grid>

        {/* Dashboard content */}
        <Grid item xs={11.3}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardLayout;
