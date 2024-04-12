import "./App.css";
import React, { useState } from "react";
import { sortBy } from "lodash";
import vinylData from "./assets/vinyldata.json";
import Vinyl from "./components/vinyl";
import Cart from "./components/cart";
import FilterButtons from "./components/FilterButtons";
import SortingButton from "./components/SortingButton";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
vinylData.forEach((vinyl) => {
  vinyl.image = process.env.PUBLIC_URL + "/" + vinyl.image;
});
/* ############################################################## */

function App() {
  const [cart, updateCart] = useState([]);
  const [filteredVinyls, setFilteredVinyls] = useState(vinylData);
  const [cartPrice, updateCartPrice] = useState(0.0);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [isSorted, setIsSorted] = useState(false);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    filterVinyls(genre, selectedPrice);
    setIsSorted(false);

  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
    filterVinyls(selectedGenre, price);
    setIsSorted(false);
  };

  const handleSortByPrice = () => {
    if (!isSorted) {
      sortVinyls();
    }
  };

  const handleClearCart = () => {
    updateCart([]);
    updateCartPrice(0.0);
  };


  const filterVinyls = (genre, price) => {
    let filteredVinyls = vinylData;
  
    if (genre !== "All") {
      filteredVinyls = filteredVinyls.filter(
        (vinyl) => vinyl.genre === genre
      );
    }
  
    if (price !== "All") {
      const [minPrice, maxPrice] = price.split("-").map(Number);
      filteredVinyls = filteredVinyls.filter(
        (vinyl) => vinyl.price >= minPrice && vinyl.price <= maxPrice
      );
    }
  
    setFilteredVinyls(filteredVinyls);
  };

  const sortVinyls = () => {
    const sortedResult = sortBy(filteredVinyls, 'price');
    setFilteredVinyls(sortedResult);
    setIsSorted(true);
  };

  return (
    <div>
      <FilterButtons
        handleGenreChange={handleGenreChange}
        handlePriceChange={handlePriceChange}
      />

      {/* Sorting button */}
      <SortingButton handleSortByPrice={handleSortByPrice} />
      <hr />
      {filteredVinyls.map((vinyl, index) => (
        <Vinyl
          key={index}
          name={vinyl.name}
          genre={vinyl.genre}
          price={vinyl.price}
          image={vinyl.image}
          updateCart={updateCart}
          cart={cart}
          updatePrice={updateCartPrice}
          currPrice={cartPrice}
        />
      ))}
      <div>
      <hr />
        <h2>Cart</h2>
        {
          <div>
          <Cart cartItems={cart} cartPrice={cartPrice} curPrice={cartPrice} />
          <button className="cart-button" onClick={handleClearCart}>Clear Cart</button>
          </div>

        }
      </div>
    </div>
  );
}




export default App;
