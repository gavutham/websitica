import "./Bottom.scss";

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
        <hr />
        7/12
      </div>
      <div style={flexItemStyle3}>
        3/12
        <hr />
      </div>
    </div>
  );
};

export default Bottom;


