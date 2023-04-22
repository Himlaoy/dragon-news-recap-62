import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import NewsInsights from '../NewsInsights/NewsInsights';

const News = () => {
    const singleNews = useLoaderData()
    const { title, total_view, thumbnail_url, rating, image_url, _id, details, category_id, author } = singleNews

    console.log(singleNews)
    return (
        <Card className='text-start'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> See All News Category</Button></Link>
            </Card.Body>
            <NewsInsights></NewsInsights>
        </Card>
    );
};

export default News;