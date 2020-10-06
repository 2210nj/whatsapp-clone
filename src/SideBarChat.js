import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./SideBarChat.css";
import { Link } from "react-router-dom";

function SideBarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      //do some db stuff
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
      <Link to={`/rooms/${id}`}>
        <div className="sidebar__chat">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div className="sidebarChat__info">
            <h2>{name}</h2>
            <p>Last message..</p>
          </div>
        </div>
      </Link>
  ) : (
    <div onClick={createChat} className="sidebar__chat">
      <h2>Add New chat</h2>
    </div>
  );
}

export default SideBarChat;
