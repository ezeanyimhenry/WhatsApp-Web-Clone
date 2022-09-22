import MoreIcon from "../icons/MoreIcon";
import NewMessage from "../icons/NewMessage";
import StatusIcon from "../icons/StatusIcon";

export default function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <img
        src="https://pps.whatsapp.net/v/t61.24694-24/306982051_1513579992434806_5967533910491711280_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVyKJCsBrxff68Ek8uocU0AkRk6VJIi4y59uub6se9w2qw&oe=633CFC41"
        alt=""
        className="profile-picture"
      />
      <div className="right-icons">
        <a className="sidebar-header-link" href="/">
          <StatusIcon />
        </a>
        <a className="sidebar-header-link" href="#!">
          <NewMessage />
        </a>
        <a className="sidebar-header-link" href="#!">
          <MoreIcon />
        </a>
      </div>
    </div>
  );
}
