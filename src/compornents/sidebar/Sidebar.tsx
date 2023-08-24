import React, { useEffect } from "react";
import "./Sidebar.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import MicIcon from "@mui/icons-material/Mic";
import { Headphones } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import { auth } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import { collection, query } from "firebase/firestore/lite";
import { QuerySnapshot, onSnapshot } from "firebase/firestore";

const Sidebar = () => {
  const user = useAppSelector((state) => state.user);

  const q = query(collection(db, "channels"));

  useEffect(() => {
    onSnapshot(q, (QuerySnapshot) => {
      const channelsResults = [];
      QuerySnapshot.docs.forEach((doc) => console.log(doc));
    });
  }, []);
  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./discordIcon.png" alt="" />
        </div>
      </div>

      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>

        {/* sidebarChannnels */}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarIcon" />
          </div>

          <div className="sidebarChannelLists">
            <SidebarChannel />
          </div>

          <div className="sidebarFooter">
            <div className="sidebarAccount">
              <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#8161</span>
              </div>
            </div>

            <div className="sidebarVoice">
              <MicIcon />
              <Headphones />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
