import React from "react";
import ReactDOM from "react-dom/client"; 


const Header = () => {
  return (
    <div className="header">
      <div >
        <img className="logo"
          src="https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0"
        />
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const ResturentCards = (props) => {
  return (
    <div className="res-cards">

      <img className="img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/1881376B.png"/>
      <h3>{props.resName}</h3>
      <h4>{props.cusine}</h4>
      <h4>4.4 Stars</h4>
      <h4>₹500 for two</h4>
    </div>
  )
};

const Body = () => {
  return (
    <div className="body">
      <div className=" Search-bar">
        Search
      </div>
      <div className="res-container">
        <ResturentCards
         resName ="Mehgna Foods"
         cusine="North Indian, Asian"
        />
        <ResturentCards
         resName ="KFC"
         cusine="Fast Food, American"
        />
        
        

      </div>

    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
        <Header />
        <Body/>
    </div>
  )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);




