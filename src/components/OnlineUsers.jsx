import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import logo from "../assets/chatArea.png";

function OnlineUsers() {
  return (
    <div className="list-container">
      <div className="ug-header">
        <img
          src={logo}
          alt="Logo"
          style={{ height: "2rem", width: "2rem" }}
        />
        <p className="ug-title">Online Users</p>
      </div>

      <div className="sb-search">
        <IconButton>
          <SearchIcon ></SearchIcon>
        </IconButton>
        <input placeholder="search" className="search-box"></input>
      </div>

      <div className="ug-list">
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
        </div>
        <div className="list-item">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
        </div>

      </div>
    </div>
  );
}


export default OnlineUsers;