import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleProfile from "../SingleProfile/SingleProfile";
import SearchComponent from "../SearchComponent/SearchComponent";
import "./HomeComponent.scss";

function HomeComponent() {
  const [displays, setDisplays] = useState([]);
  const [newInput, setNewInput] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      )
      .then(display => {
        setDisplays(display.data.Brastlewark.splice(3, 33));
        setIsloading(false);
      });
  }, []);

  let filteredDisplays = displays.filter(display => {
    return display.name.toLowerCase().includes(newInput.toLowerCase());
  });

  return (
    <div>
      <header>
        <h1>HybridApp</h1>
        <SearchComponent className="search-field" searchInput={setNewInput} />
      </header>
      <div className="gnome-container">
        {isLoading ? (
          <p>Loading gnomes...</p>
        ) : (
          filteredDisplays.map(gnome => (
            <SingleProfile gnome={gnome} key={gnome.id} />
          ))
        )}
      </div>
    </div>
  );
}
export default HomeComponent;
