import { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "./Card";
import Shimmer from "./Shimmer";
import Search from "./Search";

const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7567257&lng=76.6430551&collection=80476&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

const RestaurantList = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [allRes, setAllRes] = useState([]);

  const fetchRestaurants = async () => {
    const res = await fetch(API_URL);
    const json = await res.json();

    const restaurants =
      json?.data?.cards
        ?.filter(
          (card) =>
            card?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        )
        .map((card) => card.card.card.info) || [];

    setListOfRes(restaurants);
    setAllRes(restaurants); // for backup
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleVegFilter = () => {
    setListOfRes(allRes.filter((item) => item.veg === true));
  };

  const handleNonVegFilter = () => {
    setListOfRes(allRes.filter((item) => item.veg !== true));
  };

  const handleReset = () => {
    setListOfRes(allRes);
  };

  const handleSearch = (searchText) => {
    
    if (!searchText) {
      setListOfRes(allRes);
      return;
    }
    setListOfRes(
      allRes.filter(
        (item) => item.name.toLowerCase().includes(searchText.toLowerCase()) // to fix Case Sensitivity
      )
    );
  };

  return (
    <div>
      <Search onSearch={handleSearch} />

      <div className="filter">
        <button className="filter-btn" onClick={handleVegFilter}>
          Veg Only
        </button>
        <button className="filter-btn" onClick={handleNonVegFilter}>
          Non-Veg Only
        </button>
        <button className="filter-btn" onClick={handleReset}>
          Show All
        </button>
      </div>

      <div className="restaurant-list">
        {listOfRes.length === 0 ? (
          <Shimmer />
        ) : (
          listOfRes.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.id}`}
              key={restaurant.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card {...restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
