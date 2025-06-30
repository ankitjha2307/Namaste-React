import ResturentCards from "./ResturencCards"; 
import Shimmer from "./shimmer";
import HorizontalSideBar from "./HorizontalSideBar"; 
import { useEffect,useState } from "react";
// import { CiSearch } from "react-icons/ci";

const Body = () => {
const [listOfResutrent,setlistOfResutrent] = useState([]);  
const [filterResturent,setFilterResturent] = useState([])
const[crouselArray,setCrouselArray] = useState([]);

const [serchText,setSerchText] = useState("");

useEffect(()=> {
  fetchData();
},[]);

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);

const json= await data.json();

setlistOfResutrent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
console.log(json);
setFilterResturent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setCrouselArray(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);

};


// if(listOfResutrent.length === 0){
//   return <Shimmer/>; 
// }

  return listOfResutrent.length === 0 ?<Shimmer/>:
   (
    <div className="body">
      <div className="crousel-container">
       <div className="title">
           <h1>Whats on your mind ?</h1>

         <div className="pointer">
           
       
          </div>
       </div>
       
       <div className="crousel">
         <HorizontalSideBar data={crouselArray}/>       
      </div>
      
      </div>
      <div className="filter">
        <div className="search-bar">
          <input type="text" className="search" value={serchText} onChange={(e)=> {
            setSerchText(e.target.value); 
          }}/>
          <button className="search-button" onClick={() => {
  const filtered = listOfResutrent.filter((res) =>
    res.info.name.toLowerCase().includes(serchText.toLowerCase())
  );
  setFilterResturent(filtered);
}}>
  Search
</button>

        </div>
        <button 
        className="filter-btn"
         onClick={() => {
          const filterdlist = listOfResutrent.filter(
            (res)=> res.info.avgRating >4.3
          );
          setFilterResturent(filterdlist);
           
           }}
           >
            Top Rated Resturent
            </button>
      </div>
      <div className="res-container">
        
        {filterResturent.map((restaurant)=>{   
        return  <ResturentCards key={restaurant.info.id} resData={restaurant}/>
            
        })}

      </div> 
    </div>
  );
};

export default Body;    