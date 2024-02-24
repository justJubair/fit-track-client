import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import axios from "axios";

const NotificationDropdown = ({ currentUser }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

//   handle friend request accept
const handleFriendAccept = (_id)=>{
    const userId = currentUser?._id
    const data = {userId, friendRequestId: _id}
    const dbResponse = axios.patch("http://localhost:5000/api/v1/userFriendUpdate", data)
    console.log(dbResponse)
}
// handle friend request reject
const handleFriendReject = (_id)=>{
    console.log("reject", _id)
}
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Notifications">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <NotificationsIcon color="info" />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* one friend request */}
        <div className="space-y-3">
        {
            currentUser?.friendList?.map(friendReq=> <div key={friendReq?._id}
                className="flex items-center gap-5 px-8 py-2 m-2 bg-gray-300 rounded-lg">
                <div className="flex items-center gap-2">
                  <Image
                    className="rounded-full w-8 h-8 object-cover"
                    src="https://publish.purewow.net/wp-content/uploads/sites/2/2022/05/ross-gellar-friends-cat.jpg?resize=720%2C524"
                    width={100}
                    height={100}
                    alt="friend request user profile"
                  />
                  <p className="text-sm font-medium">{friendReq?.userName}</p>
                </div>
      
                {/* accept and reject button */}
                <div className="flex gap-2 justify-center ">
                  <button onClick={()=> handleFriendAccept(friendReq?._id)} className="bg-slate-50 rounded-full duration-200 hover:scale-105">
                    <CheckIcon color="success" />
                  </button>
                  <button className="bg-slate-50 rounded-full duration-200 hover:scale-105">
                    <CloseIcon onClick={()=> handleFriendReject(friendReq?._id)} color="warning" />
                  </button>
                </div>
              </div>)
        }
        </div>
      </Menu>
    </React.Fragment>
  );
};

export default NotificationDropdown;
