import { CDN_URL } from "../Utils/Constant"

const ResturentCards = (props) => {

  const {name, cuisines,avgRating, costForTwo, areaName, cloudinaryImageId} = props.resData.info;

  return (
    <div className="res-cards">

      <img className="img" src={CDN_URL+ cloudinaryImageId}/>
      <h3>{name}</h3>
      <div className="name">
        <h4>{cuisines}</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
      <h4>Rating {avgRating}</h4>
      </div>
    </div>
  )
};


// Higher order componenet :- it takes input as resturant card and give output "promoted resturent card "


export const withPromotedLabel = (ResturentCards) => {
  return (props) => {
    return (
      <div className="res-card-wrapper">
        <label className="promoted-label">Promoted</label>
        <ResturentCards {...props} />
      </div>
    );
  };
};

  

export default ResturentCards;