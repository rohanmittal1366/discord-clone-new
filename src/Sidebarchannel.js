import React from "react";
import { setChannelInfo } from "./features/appSlice";
import "./Sidebarchannel.css";
import { useDispatch } from "react-redux";

function Sidebarchannel({ id, channelName }) {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarchannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarchannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
}

export default Sidebarchannel;
