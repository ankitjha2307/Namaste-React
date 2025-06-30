import { useState,useEffect } from "react"
import Shimmer from "./shimmer";
import { useParams } from "react-router";

const ResturantMenu = () => {

    const [resInfo,setResInfo] = useState(null); 

    const {resId} = useParams();


    useEffect(()=> {
       fetchMenu();
    },[]);
    

    const fetchMenu = async () => { 
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + resId
        );

        const json = await data.json();

        console.log(json);
        setResInfo(json.data)
    };  


   

    
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
