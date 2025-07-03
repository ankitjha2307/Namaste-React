import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./Component/Header";
import Body from "./Component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


import Error from "./Component/Error";
import ResturantMenu from "./Component/ResturantMenu";
import Footer from "./Component/Footer";
import LoginPage from "./Component/Login";
const Loading = () => <h2>Loading...</h2>;


const About = lazy(() => import("./Component/About.jsx"));


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
    element: (<Suspense fallback={<Loading />}>< About/></Suspense>)
    
  },

  {
    path: "/contact", 
    element: <Suspense fallback={<Loading />}>
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




