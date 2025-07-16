import { useState } from "react";
import Card from "./Card";
import restaurantList from "../utils/dummydata";

const RestaurantList = () => {

  const [listOfRes, setListOfRes] = useState(restaurantList);

  const handleVegFilter = () => {
    const VegList = restaurantList.filter(
      (item) => item.foodType.toLowerCase() === "veg"
    );
    setListOfRes(VegList);
  };

  const handleNonVegFilter=()=>{

    const NonVegList = restaurantList.filter(
      (item) => item.foodType=== "Non-Veg"
    );
    setListOfRes(NonVegList);

  };
  const handleReset = () => {
    setListOfRes(restaurantList);
  };

  return (
    <div>
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
        {listOfRes.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
