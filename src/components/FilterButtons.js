import React from "react";

const FilterButtons = ({ handleGenreChange, handlePriceChange }) => {
  return (
    <div className="filter-buttons-container">
      {/* Genre filter buttons */}
      <div className="filter-group">
        <span>Filter by Genre: </span>
        <button onClick={() => handleGenreChange("All")}>All Genres</button>
        {["Alternative", "Punk" ].map((genre) => (
          <button key={genre} onClick={() => handleGenreChange(genre)}>
            {genre}
          </button>
        ))}
      </div>

      {/* Price filter buttons */}
      <div>
      <div className="filter-group">
          <span>Filter by Price: </span>
          <button onClick={() => handlePriceChange("All")}>All Prices</button>
          <button onClick={() => handlePriceChange("0-10")}>$0 - $10</button>
          <button onClick={() => handlePriceChange("11-25")}>$11 - $25</button>
        </div>
       </div>
     </div>
  );
};

export default FilterButtons;
