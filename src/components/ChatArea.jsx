import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from '@mui/icons-material/Send';

import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

function ChatArea() {
  const props =
    {name:"Test1",
    lastMessage:"lastMessage#1",
    timeStamp:"today"
    };
    
  return (
    <div className="chatarea-container">
      <div className="chatarea-header">
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{props.name}</p>
          <p className="con-timestamp">{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </div>
      <div className="chatarea-messages">
        <MessageOthers></MessageOthers>
        <MessageSelf></MessageSelf>
        <MessageOthers></MessageOthers>
        <MessageSelf></MessageSelf>
        <MessageOthers></MessageOthers>
        <MessageSelf></MessageSelf>
      </div>
      <div className="text-input-area">
        <input placeholder="type a message" className="search-box"></input>
        <IconButton><SendIcon></SendIcon></IconButton>
      </div>
    </div>
  );
}
export default ChatArea;
