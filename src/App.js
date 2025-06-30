import React from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./Component/Header";
import Body from "./Component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Component/About";
import ContactUs from "./Component/ContactUs";
import Error from "./Component/Error";
import ResturantMenu from "./Component/ResturantMenu";
import Footer from "./Component/Footer";





const AppLayout = () => {
  return (
    <div className="app">
        <Header />
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[

       {
    path: "/", 
    element:  < Body/>
  },

      {
    path: "/about",  
    element:  < About/>
  },

  {
    path: "/contact", 
    element:  < ContactUs/>
  },
  {
    path: "/resturant/:resId", 
    element: <ResturantMenu/>
    
  }

    ],
   
    errorElement: <Error/>
  },
 

])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {appRouter}/>);




