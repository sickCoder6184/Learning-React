const Card = ({ data }) => (
  <div className="card">
    {data.img ? (
      <img
        className="res-banner"
        alt={`${data.resName} Banner`}
        src={data.img}
      />
    ) : (
      <div className="fallback-img">Image not available</div>
    )}
    
    <h3>{data.resName}</h3>
    <ul className="res-details">
      <li>🍽️ {data.foodName}</li>
      <li>🗂️ {data.foodType}</li>
      <li>⏱️ {data.deliveryTime}</li>
      <li>🍴 {data.cuttleries}</li>
      <li>💰 {data.price}</li>
    </ul>
  </div>
);

export default Card;