import { SWIGGY_CDN } from "../utils/constans";

const Card = ({ name, cloudinaryImageId, cuisines, avgRating, costForTwo, areaName }) => (
  <div className="card">
    <img
      className="res-banner"
      alt={name}
      src={cloudinaryImageId ? cloudinaryImageId : "https://via.placeholder.com/150"}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://cdn.shopify.com/s/files/1/0774/9769/6567/files/ITL_WIN_Tower_480x480.png?v=1718801282";
      }}
    />
    <h3>{name}</h3>
    <p>{cuisines?.join(", ")}</p>
    <p>⭐ {avgRating}</p>
    <p>{costForTwo}</p>
    <p>{areaName}</p>
  </div>
);

export default Card;