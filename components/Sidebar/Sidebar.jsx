import "./Sidebar.scss";
import { GoHomeFill } from "react-icons/go";
import { MdLibraryMusic } from "react-icons/md";
import { FaRadio } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { PiCassetteTapeFill } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/logo.png" alt="logo" height={50} />
      </div>
      <div className="first">
        <GoHomeFill size={24} className="icon selected" />
        <MdLibraryMusic size={24} className="icon" />
        <FaRadio size={24} className="icon" />
        <PiCassetteTapeFill size={24} className="icon" />
      </div>
      <div className="second">
        <FaUserAlt size={24} className="icon" />
        <LuLogOut size={24} className="icon" />
      </div>
    </div>
  );
};

export default Sidebar;
