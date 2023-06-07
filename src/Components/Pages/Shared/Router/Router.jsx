import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home_Layout from "../../../Layout/Home_Layout/Home_Layout";
import Home from "../../Home/Home/Home";
import Course_Classes from "../../Home/Course_Classes/Course_Classes";
import Instructor from "../../Home/Instructor/Instructor";
import Resister from "../Resister/Resister";
import Login from "../Login/Login";
import ErrorPage from "../Error/Error";
import Dashboard_Layout from "../../../Layout/Dashboard_Layout/Dashboard_Layout";
import Manage_Users from "../../Dashboard/Manage_Users/Manage_Users";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_Layout></Home_Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>,


        },{
            path:"/Course_class",
            element:<Course_Classes></Course_Classes>
        },{
            path:"/Instructor",
            element:<Instructor></Instructor>
        }
    ]
  },
  
  {
    path:"resister",
    element:<Resister></Resister>
  },{
    path:"login",
    element:<Login></Login>
  },

  {
    path:"Dashboard",
    element:<Dashboard_Layout></Dashboard_Layout>,
    children:[
      {
        path:"manage_user",
        element:<Manage_Users></Manage_Users>
      }
    ]
  }
]);

export default router;