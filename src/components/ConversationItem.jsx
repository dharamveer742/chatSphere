import { useSelector } from "react-redux";
import "./myStyles.css";
function ConversationItem({ props }) {
  const lightTheme = useSelector((state)=>state.themeKey.lightTheme);
  return (
    <div className={"conversation-container" + (lightTheme?"":" dark")}>
      <p className="con-icon">{props.name[0]}</p>
      <p className={"con-title" + (lightTheme?"":" dark")}>{props.name}</p>
      <p className="con-lastmessage">{props.lastMessage}</p>
      <p className={"con-timestamp" + (lightTheme?"":" dark")} >{props.timeStamp}</p>
    </div>
  );
}
export default ConversationItem;
