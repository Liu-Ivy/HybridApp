import React, { useState } from "react";
import "./SingleProfile.scss";

function SingleProfile(props) {
  const { name, thumbnail, age, professions, friends } = props.gnome;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div onClick={() => setShowInfo(!showInfo)}>
        <p className="whiteBar-text">{name}</p>
        <img className="gnome-img" src={thumbnail} alt="" />
      </div>
      {showInfo ? (
        <div className="gnome-info">
          <div className="age-box">
            <h3>Age</h3>
            <p>{age}</p>
          </div>
          <div className="professions-box">
            <h3>Professions</h3>
            {professions.map((profession, i) => (
              <p key={i}>{profession}</p>
            ))}
          </div>
          <div className="friends-box">
            <h3>Friends</h3>
            {friends.map((profession, i) => (
              <p key={i}>{friends}</p>
            ))}
          </div>
          
        </div>
      ) : null}
    </>
  );
}

export default SingleProfile;
