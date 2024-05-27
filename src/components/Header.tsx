import React, { useState } from "react";
import "../styles/Styles.css";
import { setSearchQuery } from "./searchState";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [inputValue, setinputValue] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setinputValue(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchQuery(inputValue);
  };

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === `Enter`) {
      handleSearchClick();
      navigate("/search");
    }
  };

  return (
    <div id="header" className="container-fluid align-items-center">
      <div id="searchBg" className="input-group p-2 rounded-1 container">
        <input
          type="text"
          id="sb"
          className="border-0 search-query form-control me-1"
          placeholder="Search for a movie, person or genre"
          value={inputValue}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <Link to="/search">
          <button
            id="sButton"
            type="button"
            className="btn btn-danger fw-bold rounded-1 opacity-100 me-1"
            onClick={() => {
              handleSearchClick();
              navigate("/search");
            }}
          >
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
