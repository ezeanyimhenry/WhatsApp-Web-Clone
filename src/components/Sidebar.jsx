import { useState, useEffect } from "react";
import { chatRooms } from "../store/store";
import ChatRoom from "./ChatRoom";
import Searchbar from "./sidebar/Searchbar";
import SidebarHeader from "./sidebar/SidebarHeader";

const SideBar = ({ setChatOnView }) => {
  const [chatRoomFilter, setChatRoomFilter] = useState(chatRooms);
  const [searchValue, setSearchValue] = useState("");
  {
    /*useEffect(()=>{
    const filteredChatRoom = chatRooms.filter(item=>item.name.toLowerCase().includes(searchValue.toLowerCase()))
    setChatRoomFilter(filteredChatRoom)
  },[searchValue])*/
  }
  return (
    <div className="sidebar">
      <SidebarHeader />
      <Searchbar setSearchValue={setSearchValue} searchValue={searchValue} />
      <ul>
        {chatRoomFilter.map((chatRoom) => (
          <ChatRoom
            chatRoom={chatRoom}
            setChatOnView={setChatOnView}
            key={chatRoom.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
