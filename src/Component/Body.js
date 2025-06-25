import ResturentCards from "./ResturencCards"; 
import resList from "../Utils/mockData";

import { useState } from "react";


const Body = () => {
const [listOfResutrent,setlistOfResutrent] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn"
         onClick={() => {
          const filterdlist = listOfResutrent.filter(
            (res)=> res.info.avgRating >4
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