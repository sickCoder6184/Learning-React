import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SwiggyApi } from "../utils/constans";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line
  }, [resId]);

  const fetchMenu = async () => {
    setLoading(true);
    try {
      const url = `${SwiggyApi}${resId}`;
      const res = await fetch(url);
      const json = await res.json();
      setMenuData(json?.data);
    } catch (error) {
      setMenuData({});
      
      
      console.error(error);
    }
    setLoading(false);
  };

  if (loading || !menuData || !menuData.cards) {
    return <div className="menu shimmer-menu">Loading...</div>;
  }

  // Extract restaurant info
  const restaurantCard = menuData.cards.find(
    (card) =>
      card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
  const restaurant = restaurantCard?.card?.card?.info;

  // Find the recommended section
  const regularCards = menuData.cards.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const recommendedCard = regularCards.find(
    (c) =>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
      c.card?.card?.title?.toLowerCase().includes("recommended")
  );
  const recommendedDishes = recommendedCard?.card?.card?.itemCards || [];

  return (
    <div className="menu">
      {restaurant && (
        <div className="restaurant-details">
          <h1>MENU</h1>
          <h2>{restaurant.name}</h2>
        </div>
      )}

      <div className="dishes-list">
        {recommendedDishes.length > 0 ? (
          <ul>
            {recommendedDishes.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - ₹
                {(item.card.info.price || item.card.info.defaultPrice)
                  ? ((item.card.info.price || item.card.info.defaultPrice) / 100)
                  : "N/A"}
              </li>
            ))}
          </ul>
        ) : (
          <p>No recommended dishes found.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;