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
import Add_Class from "../../Dashboard/Add_Class/Add_Class";
import Manage_Class from "../../Dashboard/Manage_Class/Manage_Class";
import My_Class_Instructor from "../../Dashboard/My_Class_Instructor/My_Class_Instructor";
import Update_AddClass from "../../Dashboard/Update_AddClassData/Update_AddClass";
import My_Class_User from "../../Dashboard/My_Class_User/My_Class_User";
import Strippayment from "../../Dashboard/Student_Payment/Strippayment";
import User_Enrollclass from "../../Dashboard/User_Enrollclass/User_Enrollclass";
import Payment_history from "../../Dashboard/Payment_history/Payment_history";
import Private_route from "../PrivateRoute/PrivateRoute";


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
    element:<Private_route><Dashboard_Layout></Dashboard_Layout></Private_route>,
    children:[
      {
        path:"manage_user",
        element:<Manage_Users></Manage_Users>
      },{
        path:"addclass",
        element:<Add_Class></Add_Class>
      },{
        path:"manage_class",
        element:<Manage_Class></Manage_Class>
      },{
        path:"instructor_my_class",
        element:<My_Class_Instructor></My_Class_Instructor>,
       
      },
      {
        path:"updateClass/:id",
        element:<Update_AddClass></Update_AddClass>,
        loader: ({params}) =>fetch(`http://localhost:6889/getAddClassbyId/${params.id}`)
      },
      {
        path:"user_my_class",
        element:<My_Class_User></My_Class_User>
      },{
        path:"payment/:id",
        element:<Strippayment></Strippayment>
      },{
        path:"enroll",
        element:<User_Enrollclass></User_Enrollclass>
      },{
        path:"payment_history",
        element:<Payment_history></Payment_history>
      }
    ]
  },

  
]);

export default router;