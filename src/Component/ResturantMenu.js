import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useResturentMenu from "../Utils/useResturantMenu";
import ItemList from "./itemList";


const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const cardsArray =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const { text } = resInfo?.cards?.[0]?.card?.card || {};

  const categories = cardsArray.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="menu">
      <h1 className="menu-name">{text}</h1>

      <div className="menu-container">
        {categories.map((card, index) => {
          const { title, itemCards } = card.card.card;
          if (!itemCards) return null;

          return (
            
              
              <ItemList key={index} items={itemCards} title={title} />
            
          );
        })}
      </div>
    </div>
  );
};

export default ResturantMenu;
