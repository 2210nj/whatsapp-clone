import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SideBarChat from "./SideBarChat";
import './SideBar.css'

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton><DonutLargeIcon/></IconButton>
          <IconButton><ChatIcon/></IconButton>
          <IconButton><MoreVertIcon/></IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar_searchContainer">
            <SearchOutlinedIcon/>
            <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
          <SideBarChat addNewChat/>
          <SideBarChat/>
          <SideBarChat/>
          <SideBarChat/>
      </div>
    </div>
  );
}

export default SideBar;
