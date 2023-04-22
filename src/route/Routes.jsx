import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import Category from "../page/Home/Category/Category";
import NewsLayOut from "../layout/NewsLayOut";
import News from "../page/News/News";
import LogInLaOut from "../layout/LogInLaOut";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LogInLaOut></LogInLaOut>,
        children:[
            {
                path:'/',
                element: <Navigate to="/category/0"></Navigate>,
            },
            {
                path:'login',
                element:<Login></Login>,
            },
            {
                path:'register',
                element:<Register></Register>,
            }
        ]
    },
    {
        path:'category',
        element:<Main></Main>,
        children:[
           
            {
                path:':id',
                element:<Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element: <NewsLayOut></NewsLayOut>,
        children:[
            {
                path:':id',
                element:<News></News>,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router