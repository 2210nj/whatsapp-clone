import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import './SideBarChat.css';

function SideBarChat({addNewChat}) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      //do some db stuff
    }
  };

  return !addNewChat ? (
    <div className="sidebar__chat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message..</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebar__chat">
      <h2>Add New chat</h2>
    </div>
  );
}

export default SideBarChat;
