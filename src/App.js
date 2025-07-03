import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./Component/Header";
import Body from "./Component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./Component/About";

import Error from "./Component/Error";
import ResturantMenu from "./Component/ResturantMenu";
import Footer from "./Component/Footer";
import LoginPage from "./Component/Login";


const About = lazy(() => import("./Component/About"));
// const About = React.lazy(() => import("./Component/About"))

const ContactUs = lazy(() => import("./Component/ContactUs"));





function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />


    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[

       {
    path: "/", 
    element:  < Body/>,
  },

  

      {
    path: "/about",  
    element: < About/>
  },

  {
    path: "/contact", 
    element: <Suspense>
               < ContactUs/> 
            </Suspense>
  },
  {
    path: "/resturant/:resId", 
    element: <ResturantMenu/>
    
  },
   {
    path: "/login", 
    element: <LoginPage/>
    
  }

    ],
   
    errorElement: <Error/>
  },
 

])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {appRouter}/>);




