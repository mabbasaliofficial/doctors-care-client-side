import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../Components/ContactUs";
import Treatment from "../Components/Treatment";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ServicePages from "../Pages/ServicePages";
import Signup from "../Pages/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/services',
                element: <ServicePages/>,
                loader: () => fetch('https://doctors-point.vercel.app/services')
            },{
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/contactus',
                element: <ContactUs/>

            }
        ]
    }
])

export default router;