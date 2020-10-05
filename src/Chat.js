import React, {useEffect, useState} from "react";

import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";
import { IconButton } from "@material-ui/core";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
  }
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerInfo">
          <h3>School Group</h3>
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
        <div className={`chat__message ${true && "chat_receiver"}`}>
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
