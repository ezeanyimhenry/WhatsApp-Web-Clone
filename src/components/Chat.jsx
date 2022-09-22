import React, { useState, useEffect } from "react";
import { chats } from "../store/store";
import SideBar from "./Sidebar";

const Chat = () => {
  const [chatOnView, setChatOnView] = useState(0);
  const [chatMessages, setChatMessage] = useState([]);
  // const allChats=chats
  console.log(chatMessages);
  useEffect(() => {
    const getChats = chats.filter((item) => item.chatid === chatOnView);
    setChatMessage(getChats);
  }, [chatOnView]);
  return (
    <div className="chat">
      <SideBar setChatOnView={setChatOnView} />
    </div>
  );
};
export default Chat;
