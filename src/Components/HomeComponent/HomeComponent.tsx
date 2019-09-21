import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import SingleProfile from "../SingleProfile/SingleProfile";
import SearchComponent from "../SearchComponent/SearchComponent";
import "./HomeComponent.scss";

export interface Gnome {
  id: string;
  name: string;
  thumbnail: string;
  age: string;
  professions: string[];
  friends: string[];
  hair_color: string;
  height: string;
}

let DEFAULT_GNOME: Gnome = {
  id: "",
  name: "",
  thumbnail: "",
  age: "",
  professions: [],
  friends: [],
  hair_color: "",
  height: ""
};

function HomeComponent() {
  const [gnomes, setGnomes] = useState([DEFAULT_GNOME]);
  const [newInput, setNewInput] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      )
      .then(({ data }: AxiosResponse) => {
        // started at 3 because I like the baby deer picture more than the gorilla
        setGnomes(data.Brastlewark.splice(3, 33));
        setIsloading(false);
      });
  }, []);

  let filteredGnomes: Gnome[] = gnomes.filter((gnome: Gnome) => {
    return gnome.name.toLowerCase().includes(newInput.toLowerCase());
  });

  return (
    <div>
      <header>
        <h1>HybridApp</h1>
        <SearchComponent searchInput={setNewInput} newInput={newInput} />
      </header>
      <div className="gnome-container">
        {isLoading ? (
          <p>Loading gnomes...</p>
        ) : (
          filteredGnomes.map((gnome: Gnome) => (
            <SingleProfile gnome={gnome} key={gnome.id} />
          ))
        )}
      </div>
    </div>
  );
}
export default HomeComponent;
