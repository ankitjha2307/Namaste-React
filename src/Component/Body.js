import ResturentCards from "./ResturencCards"; 
import Shimmer from "./shimmer"; 

import { useEffect, useState } from "react";



const Body = () => {
const [listOfResutrent,setlistOfResutrent] = useState([]);


useEffect(()=> {
  fetchData();
},[]);

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);

const json= await data.json();

setlistOfResutrent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
console.log(json);
 
};

if(listOfResutrent.length === 0){
  return <Shimmer/>; 
}

  return listOfResutrent.length === 0 ?<Shimmer/>:
   (
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn"
         onClick={() => {
          const filterdlist = listOfResutrent.filter(
            (res)=> res.info.avgRating >4.3
          );
          setlistOfResutrent(filterdlist);
           
           }}
           >
            Top Rated Resturent
            </button>
      </div>
      <div className="res-container">
        
        {listOfResutrent.map((restaurant)=>{   
        return  <ResturentCards key={restaurant.info.id} resData={restaurant}/>
            
        })}

      </div> 
    </div>
  );
};

export default Body;    