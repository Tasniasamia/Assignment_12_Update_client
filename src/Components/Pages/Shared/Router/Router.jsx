import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home_Layout from "../../../Layout/Home_Layout/Home_Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_Layout></Home_Layout>,
    children:[
        {
            
        }
    ]
  },
]);

export default router;