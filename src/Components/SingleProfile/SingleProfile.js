import React, { useState } from "react";
import "./SingleProfile.scss";

function SingleProfile(props) {
  const { name, thumbnail, age, professions } = props.gnome;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div onClick={() => setShowInfo(!showInfo)}>
        <p className="whiteBar-text">{name}</p>
        <img className="gnome-img" src={thumbnail} alt="" />
      </div>
      {showInfo ? (
        <div className="gnome-info">
          <div className="gnome-age">
            <h3>Age</h3>
            <p>{age}</p>
          </div>
          <div className="profession">
            <h3 className="profession-title">Professions:</h3>
            <div>
            {professions.map((profession, i) => (
              <p className="profession-content" key={i}>{profession}</p>
            ))}
            </div>
          </div>
          
        </div>
      ) : null}
    </>
  );
}

export default SingleProfile;
