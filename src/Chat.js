import React from "react";
import "./chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Messages from "./Messages";

function Chat() {
  return (
    <div className="Chat">
      <ChatHeader />

      <div className="chat__messages">
        <Messages />
        <Messages />
        <Messages />
      </div>
      <div className="chat__input">
        <AddCircleIcon fontsize="large" />
        <form>
          <input placeholder={"Messages #TESTCHANNEL"} />
          <button className="chat__inputButton" type="Submit">
            Send Messages
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
}

export default Chat;
