import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleProfile from "../SingleProfile/SingleProfile";
import SearchComponent from "../SearchComponent/SearchComponent";
import "./HomeComponent.scss";

function HomeComponent() {
  // These three hooks replace what you previously had in state when Home was still a class component
  const [displays, setDisplays] = useState([]);
  const [newInput, setNewInput] = useState("");
  const [isLoading, setIsloading] = useState(true);
  // state = {
  //   query:'',
  //   displays:[],
  //   filteredProfile:[],
  //   newInput: '',
  // }

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

  // componentDidMount() {
  //   axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
  //   .then( display => {
  //     setDisplays(display.data.Brastlewark)
  //     //this.setState({displays: display.data.Brastlewark})
  //   })
  // }

  // we don't need this extra function, as we can simply call setNewInput on its own
  // const handleSearchBar = input => {
  //   setNewInput(input);
  // };

  let filteredDisplays = displays.filter(display => {
    return display.name.toLowerCase().includes(newInput.toLowerCase());
  });

  return (
    <div>
      <header>
        <h1>HybridApp</h1>
        <SearchComponent searchInput={setNewInput} />
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
