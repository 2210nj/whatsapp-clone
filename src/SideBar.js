import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SideBarChat from "./SideBarChat";
import "./SideBar.css";
import db from "./firebase";

function SideBar() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    // return () => {
    //   unsubscribe();
    // };
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar_searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SideBarChat addNewChat />
        {rooms.map((rooms) => (
          <SideBarChat key={rooms.id} id={rooms.id} name={rooms.data.name} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
