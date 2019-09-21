import React, { useState, ReactEventHandler } from "react";
import "./SearchComponent.scss";

interface SearchProps {
  searchInput: Function;
  newInput: string;
}

function SearchComponent(props: SearchProps) {
  const handleSearchBar = (event: any) => {
    props.searchInput(event.target.value);
  };
  return (
    <div className="search-field">
      <input
        type="text"
        className="searching-bar"
        placeholder="Search by Name"
        value={props.newInput}
        onChange={handleSearchBar}
      />
    </div>
  );
}

export default SearchComponent;
