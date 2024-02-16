import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

const ManagePayments = ({ payments }) => {
  return (
    <Container>
      {/* user table */}
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        marginY="1.2rem"
        sx={{
          borderBottom: "2px solid blue",
          width: "250px",
          marginX: "auto",
          paddingBottom: "5px",
        }}
      >
        Manage Payments
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Method</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Status</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow
                key={payment.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {payment?.address?.zipcode}
                </TableCell>
                <TableCell align="right">{payment.name}</TableCell>
                <TableCell align="right">{payment?.address?.geo?.lat}</TableCell>
                <TableCell align="right">{payment?.address?.suite}</TableCell>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManagePayments;
