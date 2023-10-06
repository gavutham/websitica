import "./Tile.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Tile = ({ path, title, artist, time }) => {
  return (
    <div className="tile">
      <div className="first">
        <img src={path} alt="" />
      </div>
      <div className="second">
        <div className="">{title}</div>
      </div>
      <div className="third">
        <div className="">{artist}</div>
      </div>
      <div className="fourth">
        <div className="">{time}</div>
      </div>
      <div className="fifth">
        <BiDotsVerticalRounded />
      </div>
    </div>
  );
};

export default Tile;
