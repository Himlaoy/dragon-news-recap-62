import moment from 'moment';
import React from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCategory = ({ news }) => {
    const { title, total_view, thumbnail_url, rating, image_url, _id, details, category_id, author } = news
    // console.log(news)

    return (
        <Card className="mb-4 text-start">
            <Card.Header className='d-flex'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='flex-grow-1 ms-2'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyy-mm-d')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)} <Link to={`/news/${_id}`}>ReadMore....</Link></>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div className='d-flex'>
                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    >
                    </Rating>
                    <p><span>{rating?.number}</span></p>
                </div>
                <div className='d-flex'>
                    <FaEye></FaEye>
                    <p>{total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCategory;