import React from "react";
import "./Sidebarchannel.css";

function Sidebarchannel({ id, channelName }) {
  return (
    <div className="sidebarchannel">
      <h4>
        <span className="sidebarchannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
}

export default Sidebarchannel;
