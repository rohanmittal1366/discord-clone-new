import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import "./Sidebarchannel.js";
import Sidebarchannel from "./Sidebarchannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import CallIcon from "@material-ui/icons/Call";
import InfoIcon from "@material-ui/icons/Info";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";


function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebar__top">
        <h3>Discord Clone</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar_channelsheader">
          <div className="sidebar_header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar_addchannels" />
        </div>
        <div className="sidebar_channelslist">
          <Sidebarchannel />
          <Sidebarchannel />
          <Sidebarchannel />
          <Sidebarchannel />
        </div>
      </div>
      <div className="sidebar_voice">
        <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large" />
        <div className="sidebar_voiceinfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar_voiceIcons">
          <InfoIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar />
        <div className="sidebar__profileinfo">
          <h3>@rohan</h3>
          <p>#thisIsMyId</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
