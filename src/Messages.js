import { Avatar } from "@material-ui/core";
import React from "react";
import "./messages.css";

function Messages() {
  return (
    <div className="message">
      <Avatar />
      <div className="message_info">
        <h4>
          rohan_mittal
          <span className="message_timestamp">this is a timestamp</span>
        </h4>
        <p>This is the message</p>
      </div>
    </div>
  );
}

export default Messages;
