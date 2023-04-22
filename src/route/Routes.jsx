import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home/Home";
import Category from "../page/Home/Category/Category";
import NewsLayOut from "../layout/NewsLayOut";
import News from "../page/News/News";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/category/:id',
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
            }
        ]
    }
])

export default router