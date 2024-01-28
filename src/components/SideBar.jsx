import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

import ConversationItem from "./ConversationItem";

import { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../utils/themeSlice";

function SideBar() {
  const lightTheme = useSelector((state) => state.themeKey.lightTheme);
  const dispatch = useDispatch();
  const [conversations, setConversations] = useState([
    { name: "Test1", lastMessage: "lastMessage#1", timeStamp: "today" },
    {
      name: "Test2",
      lastMessage: "lastMessage#2",
      timeStamp: "today",
    },
    {
      name: "Test3",
      lastMessage: "lastMessag#3",
      timeStamp: "today",
    },
  ]);

  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div className="other-icons">
          <Link to="#">
            <IconButton>
              <AccountCircleIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              ></AccountCircleIcon>
            </IconButton>
          </Link>

          <Link to="users">
            <IconButton>
              <PersonAddIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              ></PersonAddIcon>
            </IconButton>
          </Link>
          <Link to="groups">
            <IconButton>
              <GroupAddIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              ></GroupAddIcon>
            </IconButton>
          </Link>
          <Link to="createGroups">
            <IconButton>
              <AddCircleIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              ></AddCircleIcon>
            </IconButton>
          </Link>

          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {lightTheme && <NightlightIcon></NightlightIcon>}
            {!lightTheme && (
              <LightModeIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              ></LightModeIcon>
            )}
          </IconButton>
        </div>
      </div>

      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon
            className={"icon" + (lightTheme ? "" : " dark")}
          ></SearchIcon>
        </IconButton>
        <input
          placeholder="search"
          className={"search-box" + (lightTheme ? "" : " dark")}
        ></input>
      </div>
      <div className={"sb-conversation" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation) => {
          return (
            <Link to="chat">
              <ConversationItem
                props={conversation}
                key={conversation.name}
              ></ConversationItem>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default SideBar;
