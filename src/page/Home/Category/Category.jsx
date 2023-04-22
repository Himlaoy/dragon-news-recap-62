import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCategory from '../NewsCategory/NewsCategory';

const Category = () => {
    const {id} = useParams()
    const categoryNews = useLoaderData()
  

    return (
        <div>
            {
                categoryNews.map(news=><NewsCategory key={news._id} news={news}></NewsCategory>)
            }
        </div>
    );
};

export default Category;