import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useResturentMenu from "../Utils/useResturantMenu";
import iItemList from "./iItemList";
import ResturentCategory from "./ResturentCategory";

const ResturantMenu = () => {

    const {resId} = useParams();
    const resInfo = useResturentMenu(resId);  

      
 const cardsArray = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards || [];
 const {text} = resInfo?.cards[0]?.card?.card || {};
 


 const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter (c=> c?.card?.card?.["@type"]== 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );


  return resInfo === null ?(
    <Shimmer/>
  ) : (
    <div className="menu">
      <h1 className="menu-name"> {text} </h1>
      <div className="offer">

      </div>
      <div className="menu-container">

          {cardsArray.map((card, index)=>{ 
            const {title} = card.card.card; 
            const itemCards = card.card.card.itemCards;
            if(!itemCards) return null;
           
            return (
              <div className="menu-category" key={index}>
                <div className="title">{title}</div>
                <div className="arrow">⬇️</div>
              </div>
            )

            })} 



      

      </div>
    </div>
  )
}

export default ResturantMenu
