import React, { useEffect, useState } from "react";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { useParams } from "react-router-dom";
import db from "./firebase";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen..</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <div className="chat__message">
          <span className="chat__name">Namita</span>
          <div className="chat__messageBody">
            <span className="message">Hey Guys</span>
            <span className="chat__timestamp">21:11</span>
          </div>
        </div>
        <div className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Girish</span>
          <div className="chat__messageBody">
            <span className="message">Hi Namita</span>
            <span className="chat__timestamp">21:13</span>
          </div>
        </div>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form action="submit">
          <input
            value={input}
            type="text"
            placeholder="Type a message"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">
            Submit
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
