import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/chatArea.png";
import { motion, AnimatePresence } from "framer-motion";

function OnlineGroups() {
  return (
    <AnimatePresence>
      <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0}} transition={{ease:"anticipate",duration:"0.3"}} className="list-container">
        <div className="ug-header">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "2rem", width: "2rem" }}
          />
          <p className="ug-title">Online Groups</p>
        </div>

        <div className="sb-search">
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>
          <input placeholder="search" className="search-box"></input>
        </div>

        <div className="ug-list">
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="list-item prevent-select"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="list-item"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default OnlineGroups;
