import React from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./Component/Header";
import Body from "./Component/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About";
import ContactUs from "./Component/ContactUs";
import Error from "./Component/Error";





const AppLayout = () => {
  return (
    <div className="app">
        <Header />
        <Body/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>
  },
 
  {
    path: "/about", 
    element:  < About/>
  },

  {
    path: "/contact", 
    element:  < ContactUs/>
  }
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {appRouter}/>);




