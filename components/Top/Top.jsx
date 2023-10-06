import "./Top.scss";
import { AiOutlineSearch, AiFillPlayCircle, AiFillHeart } from "react-icons/ai";
import { TbMusicPlus } from "react-icons/tb";

const Top = () => {
  return (
    <div className="top">
      <div className="top">
        <div className="icon">
          <AiOutlineSearch size={20} color="grey" />
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="bottom">
        <div className="left">
          <img src="/Lead-image.png" alt="" />
        </div>
        <div className="right">
          <div className="title">{"Tommorrow's Tune"}</div>
          <div className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
          <div className="info">64 songs - 16 hrs+</div>
          <div className="buttons">
            <div className="">
              <div className="icon">
                <AiFillPlayCircle />
              </div>
              Play all
            </div>
            <div className="">
              <div className="icon">
                <TbMusicPlus />
              </div>
              Add to Collection
            </div>
            <div className="">
              <AiFillHeart color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
