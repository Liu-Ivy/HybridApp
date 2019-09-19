import React, { useState } from "react";
import "./SingleProfile.scss";

function SingleProfile(props) {
  const { name, thumbnail, age, professions } = props.gnome;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div onClick={() => setShowInfo(!showInfo)}>
        <p>{name}</p>
        <img className="gnome-img" src={thumbnail} alt="" />
      </div>
      {showInfo ? (
        <div>
          <h2>Age: {age}</h2>
          <h3>Professions:</h3>
          {professions.map((profession, i) => (
            <p key={i}>{profession}</p>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default SingleProfile;
