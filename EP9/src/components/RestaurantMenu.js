import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { menuData, loading } = useRestaurantMenu(resId);

  if (loading || !menuData || !menuData.cards) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Shimmer />
      </div>
    );
  }

  // Extract restaurant info
  const restaurantCard = menuData.cards.find(
    (card) =>
      card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
  const restaurant = restaurantCard?.card?.card?.info;

  // Find recommended section
  const regularCards =
    menuData.cards.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const recommendedCard = regularCards.find(
    (c) =>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
      c.card?.card?.title?.toLowerCase().includes("recommended")
  );
  const recommendedDishes = recommendedCard?.card?.card?.itemCards || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {restaurant && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 animate-fade-in">
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Restaurant Menu</h1>
              <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                {restaurant.name}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">📍 Location:</span>
                  <span>{restaurant.areaName || "Not specified"}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">⭐ Rating:</span>
                  <span className={`px-2 py-1 rounded ${
                    parseFloat(restaurant.avgRating) >= 4 
                      ? 'bg-green-100 text-green-800' 
                      : parseFloat(restaurant.avgRating) >= 3 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-red-100 text-red-800'
                  }`}>
                    {restaurant.avgRating} ⭐
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">🍽️ Cuisines:</span>
                  <span>{restaurant.cuisines?.join(", ") || "Not specified"}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">💰 Cost:</span>
                  <span>{restaurant.costForTwoMessage || "Not specified"}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="mr-2">🌟</span>
            Recommended Dishes
          </h3>
          
          {recommendedDishes.length > 0 ? (
            <div className="grid gap-4">
              {recommendedDishes.map((item, index) => (
                <div 
                  key={item.card.info.id} 
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-primary/30 transition-all duration-200 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-gray-800 mb-1">
                      {item.card.info.name}
                    </h4>
                    {item.card.info.description && (
                      <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                        {item.card.info.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      {item.card.info.ratings?.aggregatedRating?.rating && (
                        <span className="flex items-center">
                          <span className="mr-1">⭐</span>
                          {item.card.info.ratings.aggregatedRating.rating}
                        </span>
                      )}
                      {item.card.info.isVeg !== undefined && (
                        <span className={`w-4 h-4 border-2 flex items-center justify-center ${
                          item.card.info.isVeg ? 'border-green-500' : 'border-red-500'
                        }`}>
                          <span className={`w-2 h-2 rounded-full ${
                            item.card.info.isVeg ? 'bg-green-500' : 'bg-red-500'
                          }`}></span>
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="ml-4 text-right">
                    <div className="text-xl font-bold text-primary mb-2">
                      ₹{(item.card.info.price || item.card.info.defaultPrice)
                        ? ((item.card.info.price || item.card.info.defaultPrice) / 100).toFixed(0)
                        : "N/A"}
                    </div>
                    <button className="btn-primary text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🍽️</div>
              <p className="text-gray-500 text-lg mb-2">No recommended dishes found</p>
              <p className="text-gray-400 text-sm">Menu might not be available at the moment</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;