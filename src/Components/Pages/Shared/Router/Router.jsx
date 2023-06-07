import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home_Layout from "../../../Layout/Home_Layout/Home_Layout";
import Home from "../../Home/Home/Home";
import Course_Classes from "../../Home/Course_Classes/Course_Classes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_Layout></Home_Layout>,
    children:[
        {
            path:"/",
            element:<Home></Home>,


        },{
            path:"/Course_class",
            element:<Course_Classes></Course_Classes>
        }
    ]
  },
]);

export default router;