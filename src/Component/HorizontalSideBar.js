const HorizontalSideBar = ({data}) => {
    return(
  <div className="horizontal-sidebar">
    {data.map((item, index)=>{
          const imageId = item.imageId;
        return(
            <button key={index} className="sidebar-button">
               <div className="crousel-item" >
                 <img className="crousel-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + imageId}/>
               </div>
            </button>
          )
        })}
  </div>
    )
}

export default HorizontalSideBar;