import { SWIGGY_CDN } from "../utils/constans";

const Card = ({ name, cloudinaryImageId, cuisines, avgRating, costForTwo, areaName }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
    <div className="relative pb-[60%] overflow-hidden">
      <img
        className="absolute h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        alt={name}
        src={cloudinaryImageId ? cloudinaryImageId : "https://via.placeholder.com/150"}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://cdn.shopify.com/s/files/1/0774/9769/6567/files/ITL_WIN_Tower_480x480.png?v=1718801282";
        }}
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-xl mb-1 truncate">{name}</h3>
      <p className="text-gray-600 text-sm mb-2 line-clamp-1">{cuisines?.join(", ")}</p>
      <div className="flex justify-between items-center mb-2">
        <span className={`px-2 py-1 rounded text-sm font-medium ${parseFloat(avgRating) >= 4 ? 'bg-green-100 text-green-800' : parseFloat(avgRating) >= 3 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
          ⭐ {avgRating}
        </span>
        <span className="text-gray-600 text-sm">{costForTwo}</span>
      </div>
      <p className="text-gray-500 text-sm">{areaName}</p>
    </div>
  </div>
);

export default Card;