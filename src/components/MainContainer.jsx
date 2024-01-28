import "./myStyles.css";
import "../App.css";
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import OnlineUsers from "./OnlineUsers";
import {useState} from "react";
import { Outlet } from "react-router-dom";

function MainContainer(){
    
    return (
    <div className="App">
        <div className="main-container">
        
        <SideBar></SideBar>
        <Outlet></Outlet>

        {/* <Welcome></Welcome> */}
        {/* <ChatArea props={messages}></ChatArea>  */}
        {/* <OnlineUsers></OnlineUsers>*/}
       {/* <CreateGroups></CreateGroups> */}
       {/* <Welcome></Welcome>  */}
       
    </div>
    </div>
    )
    
    
}
export default MainContainer;