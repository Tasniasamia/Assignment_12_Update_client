import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home_Layout from "../../../Layout/Home_Layout/Home_Layout";
import Home from "../../Home/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_Layout></Home_Layout>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
            

        }
    ]
  },
]);

export default router;