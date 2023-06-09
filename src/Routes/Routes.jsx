import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import Mytoys from "../pages/MyToys/Mytoys";
import AddToy from "../pages/AddToy/AddToy";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Blog from '../pages/Blog/Blog'
import Update from "../pages/MyToys/Update";
import DetailsView from "../pages/DetailsView/DetailsView";
import Error from "../Error/Error";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        }, 
        {
            path: '/allToys',
            element: <AllToys></AllToys>,
        }, 
        {
            path: '/myToys',
            element: <PrivateRoute><Mytoys></Mytoys></PrivateRoute>,
        }, 
        {
            path: '/addToy',
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
        }, 
        {
            path: '/viewDetails/:id',
            element: <PrivateRoute><DetailsView></DetailsView></PrivateRoute>,
            loader: ({params}) => fetch(`https://toy-car-server-lac.vercel.app/singelToy/${params.id}`)
        }, 
        {
            path: '/update/:id',
            element: <PrivateRoute><Update></Update></PrivateRoute>,
            loader: ({params}) => fetch(`https://toy-car-server-lac.vercel.app/singelToy/${params.id}`)
        }, 
        {
            path: '/register',
            element: <Register></Register>,
        }, 
        {
            path: '/login',
            element: <Login></Login>,
        }, 
        {
            path: '/blog',
            element: <Blog></Blog>
        }, 
        
      ],
    },
    {
        path: '*',
        element: <Error></Error>
    }
  ]);

  export default router;