import React from "react";
import "./chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Messages from "./Messages";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import db from "./firebase";
import firebase from "firebase";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState([]);
  const channelName = useSelector(selectChannelName);
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
      message: input,
      user: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(" ");
  };

  return (
    <div className="Chat">
      <ChatHeader />

      <div className="chat__messages">
        {messages.map((message) => (
          <Messages
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className="chat__input">
        <AddCircleIcon fontsize="large" />
        <form>
          <input
            placeholder={
              channelName
                ? `Message #${channelName}`
                : `Select Channel to Message`
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!channelId}
          />

          <button
            className="chat__inputButton"
            type="Submit"
            onClick={sendMessage}
            Send Messages
          ></button>
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
