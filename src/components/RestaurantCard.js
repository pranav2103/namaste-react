import { CDN_URL } from "../utils/constants";
//import a named export "with export keyword in const" we use {} braces to import

const RestaurantCard = (props) => {
    const { resData } = props
  
    //destruture to beautify code
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData?.info
  
    return (
      <div className="res-card" style={{ backgroundColor: "#F0F0F0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL+
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    )
  }

  export default RestaurantCard;