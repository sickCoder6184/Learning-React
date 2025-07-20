import { Link } from "react-router-dom";
import Card from "./Card";
import Shimmer from "./Shimmer";
import Search from "./Search";
import useRestaurantList from "../utils/useRestaurantList";

const RestaurantList = ({ lat, lng }) => {
  const {
    listOfRes,
    loading,
    hasMore,
    loadMore,
    filterVeg,
    filterNonVeg,
    resetFilter,
    search,
  } = useRestaurantList(lat, lng);

  return (
    <div>
      <Search onSearch={search} />

      <div className="flex justify-center gap-4 my-6">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          onClick={filterVeg}
        >
          Veg Only
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          onClick={filterNonVeg}
        >
          Non-Veg Only
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          onClick={resetFilter}
        >
          Show All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {loading && listOfRes.length === 0 ? (
          <Shimmer />
        ) : listOfRes.length === 0 ? (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 text-lg">No restaurants found.</p>
          </div>
        ) : (
          listOfRes.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.id}`}
              key={restaurant.id}
              className="block h-full"
            >
              <Card {...restaurant} />
            </Link>
          ))
        )}
      </div>

      {/* Load More button for infinite scroll */}
      {listOfRes.length > 0 && hasMore && !loading && (
        <div className="flex justify-center">
          <button
            onClick={loadMore}
            className="px-4 py-2 my-6 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
      {/* Show "Loading..." when fetching next page */}
      {loading && listOfRes.length > 0 && (
        <div className="flex justify-center my-4">
          <Shimmer />
        </div>
      )}
      {/* End message */}
      {!hasMore && listOfRes.length > 0 && (
        <div className="text-center text-gray-500 mt-4 mb-8">No more results.</div>
      )}
    </div>
  );
};

export default RestaurantList;
