
const ResturentCards = (props) => {

  const {name, cuisines, costForTwo, areaName, cloudinaryImageId} = props.resData.info;

  return (
    <div className="res-cards">

      <img className="img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{costForTwo}</h4>
      <h4>{areaName}</h4>
    </div>
  )
};

export default ResturentCards;