import { useState,useEffect } from "react"
import Shimmer from "./shimmer";

const ResturantMenu = () => {

    const [resInfo,setResInfo] = useState(null); 


    useEffect(()=> {
       fetchMenu();
    },[]);
    

    const fetchMenu = async () => { 
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=16866&catalog_qa=undefined&submitAction=ENTER"
        );

        const json = await data.json();

        console.log(json);
        setResInfo(json.data)
    };  


   

    

 const {name} = resInfo.cards[0].card.card.text;

  return resInfo === null ?(
    <Shimmer/>
  ) : (
    <div className="menu">
      <h1>{name}</h1>
    </div>
  )
}

export default ResturantMenu
