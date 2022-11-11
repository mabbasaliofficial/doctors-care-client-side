import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../Components/ContactUs";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs";
import DetailsCard from "../Pages/DetailsCard";
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

            },
            {
                path: 'services/:id',
                element: <DetailsCard/>,
                loader: ({params}) => fetch(`https://doctors-point.vercel.app/services/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <div className="text-4xl text-center font-extrabold">This Route Is Not Found</div>
    }
])

export default router;