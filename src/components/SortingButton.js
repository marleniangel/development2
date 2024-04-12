import React from 'react';

const SortingButton = ({ handleSortByPrice }) => {
  return (
      <div className="sorting-group">
        <span>Sort Vinyls:</span>
        <button onClick={handleSortByPrice}>(Low - High)</button>
      </div>

  );
};

export default SortingButton;