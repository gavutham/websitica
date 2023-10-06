import "./Bottom.scss";
import {AiFillPlayCircle} from "react-icons/ai";
import {BiSkipNext} from "react-icons/bi";
import {BsShuffle} from "react-icons/bs";
import {BiSkipPrevious} from "react-icons/bi";
import {BiSolidVolumeFull} from "react-icons/bi";


const Bottom = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const flexItemStyle1 = {
    flex: 2, 
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 240, 240, 0.5)',
    padding: '20px',
    border: '1px solid #ccc',
  };

  const imageStyle = {
    maxWidth: '100%',
    marginRight: '20px',
  };

  const paragraphStyle = {
    flex: 1, 
  };

  const firstParagraphStyle = {
    fontSize: '80%',
  };

  const secondParagraphStyle = {
    fontSize: '60%', 
  };

  const flexItemStyle2 = {
    flex: 7,
    backgroundColor: 'rgba(240, 240, 240, 0.5)', 
    padding: '20px',
    border: '1px solid #ccc',
    justifyContent: "space-between", 
    alignItems: "center", 
  };

  const flexItemStyle3 = {
    flex: 3, 
    backgroundColor: 'rgba(240, 240, 240, 0.5)',
    padding: '20px',
    border: '1px solid #ccc',
  };

  return (
    <div style={containerStyle}>
      <div style={flexItemStyle1}>
        <img src="/Rectangle 15.png" alt="face icon" style={imageStyle} />
        <div style={paragraphStyle}>
          <p style={firstParagraphStyle}>Seasons in</p>
          <p style={secondParagraphStyle}>James</p>
        </div>
      </div>
      <div style={flexItemStyle2}>
        <BsShuffle size={22} class="icon shuffle"/>
        <BiSkipPrevious size={22} class="icon shuffle"/>
        <AiFillPlayCircle size={22} className="icon selected" />
        <BiSkipNext size={22} className="icon suffle" />
        <hr />
      
      </div>
      <div style={flexItemStyle3}>
        <BiSolidVolumeFull size={22} className="icon shuffle" />
        <hr />
      </div>
    </div>
  );
};

export default Bottom;


