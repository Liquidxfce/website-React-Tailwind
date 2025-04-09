import React from "react";
import { Link } from "react-router";
import "./TopBar.css";

// Prop function to send the search term to the parent component (Home)
function TopBar({ onSearchChange }) {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value); // Call parent function to update search term
  };

  return (
    <div className="topbar">
      <div>
        <Link to="/">
          <img
            src="https://placehold.co/500x100/png/?text=Freaky+Fashion"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="search-container">
        <form action="">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            onChange={handleSearchChange} // Handle search change
          />
        </form>
      </div>
      <div>
        {/* Additional content like heart and cart can go here */}
      </div>
      <div>
        <ul>
          <li>Nyheter</li>
          <li>Topplistan</li>
          <li>Rea</li>
          <li>Kampanjer</li>
        </ul>
      </div>
      <div className="hidden">
        <span>Nyheter</span>
        <span>Topplistan</span>
        <span>Rea</span>
        <span>Kampanjer</span>
      </div>
    </div>
  );
}

export default TopBar;
