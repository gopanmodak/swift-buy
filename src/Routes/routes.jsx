import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Deals from "../Pages/Deals";
import NewArrivals from "../Pages/NewArrivals";
import Faq from "../Pages/Faq";
import Privacy from "../Pages/Privacy";
import Terms from "../Pages/Terms";
import Returns from "../Pages/Returns";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Products from "../Pages/Products";

export const routes = createBrowserRouter([

    {
        path: "/",
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"deals",
                element:<Deals />
            },
            {
                path:"new-arrivals",
                element:<NewArrivals />,
                loader:() => fetch("https://fakestoreapi.com/products")
            },
            {
                path:"products",
                element:<Products />
            },
            {
                path:"login",
                element:<Login />
            },
            {
                path:"register",
                element:<Register />
            },

            {
                path:"faq",
                element:<Faq />
            },
            {
                path:"privacy",
                element:<Privacy />
            },
            {
                path:"terms",
                element:<Terms />
            },
            {
                path:"returns",
                element:<Returns />
            },
        ]
    }
])