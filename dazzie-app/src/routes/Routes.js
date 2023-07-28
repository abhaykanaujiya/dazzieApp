import {createBrowserRouter} from "react-router-dom"
import Dashboard from "../views/dashboard/Dashboard";
import Products from "../views/products/Products";
import Analytics from "../views/analytics/Analytics";
import Coupon from "../views/coupon/Coupon";
import Customer from "../views/customer/Customer";
import Employee from "../views/employee/Employee";
import Setting from "../views/setting/Setting";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/employee",
    element: <Customer />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/coupon",
    element: <Coupon />,
  }, 
  {
    path: "/customers",
    element: <Employee />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
]); 

export default Router