const ChatRoom = ({ chatRoom, setChatOnView }) => {
  return (
    <li className="chatroom" onClick={() => setChatOnView(chatRoom.id)}>
      <div className="chatroom-icon-bg">
        <img
          className="chatroom-icon"
          src={chatRoom.profile_image}
          alt="profile-img"
        />
      </div>
      <span className="chatroom-name">{chatRoom.name}</span>
    </li>
  );
};

export default ChatRoom;
