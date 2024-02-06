import Sidebar from "@/components/Dashboard/Sidebar";
import { Grid } from "@mui/material";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Grid container minHeight="100vh">
        {/* sidebar */}
        <Grid item xs={2} bgcolor="#1a237e">
          <Sidebar />
        </Grid>

        {/* Dashboard content */}
        <Grid item xs={10} bgcolor="green">
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardLayout;
