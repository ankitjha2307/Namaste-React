import ResturentCards from "./ResturencCards"; 

import resList from "../Utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {console.log("Button Click")}}>Top Rated Resturent</button>
      </div>
      <div className="res-container">
        
        {resList.map((restaurant, index)=>{
            return(
               <ResturentCards resData={restaurant} key={index}/>
            )
        })}

      </div> 
    </div>
  );
};

export default Body;    