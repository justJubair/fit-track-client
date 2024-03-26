"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import { Tooltip, Typography } from "@mui/material";

// icons
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteUserModal from "./DeleteUserModal";


const ManageUsers = ({ users }) => {

  const handleUserDelete =(_id)=>{
    console.log(_id)
  }

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
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Action</TableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user?._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user?.username}
                </TableCell>
                <TableCell align="right">{user?.role}</TableCell>
                <TableCell align="right">{user?.email}</TableCell>
                <TableCell align="right">
                  {/* delete */}
                  <Tooltip title="Delete" arrow>
                <DeleteForeverIcon onClick={()=> handleUserDelete(user?._id)}  sx={{color: "red", marginRight: "1.2rem", cursor: "pointer"}}/>
                <DeleteUserModal/>
               
                </Tooltip>
                <Tooltip title="Edit" arrow>
                <EditNoteIcon sx={{color: "green", cursor: "pointer"}}/>
                </Tooltip>
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
