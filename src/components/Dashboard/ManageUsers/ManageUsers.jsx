"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

// icons
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';

const ManageUsers = ({ users }) => {
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
          width: "200px",
          marginX: "auto",
          paddingBottom: "5px",
        }}
      >
        Manage Users
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Action</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">
                  {/* delete */}
                <DeleteForeverIcon sx={{color: "red", marginRight: "1.2rem"}}/>
                <EditNoteIcon sx={{color: "green"}}/>
                  </TableCell>
         
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageUsers;
