import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useResturentMenu from "../Utils/useResturantMenu";

const ResturantMenu = () => {

    const {resId} = useParams();
    const resInfo = useResturentMenu(resId);  

      
 const cardsArray = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards || [];
 const {text} = resInfo?.cards[0]?.card?.card || {};
 
 console.log(cardsArray);
 



  return resInfo === null ?(
    <Shimmer/>
  ) : (
    <div className="menu">
      <h1> {text} </h1>
      <div className="offer">

      </div>
      <div className="menu-container">

          {cardsArray.map((card, index)=>{
            const {title} = card.card.card; 
            if(!title) return null;
            return(
            <div className="menu-category" key={index}>{title }</div>
          )})}

      </div>
    </div>
  )
}

export default ResturantMenu
