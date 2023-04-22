import React, { useEffect, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [category, setCategory] = useState([])
    // console.log(category)


    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div className='mt-4'>
            <h4 className='bg-success  p-2 rounded' style={{width:'150px'}}>All category</h4>
            <div>
                {
                    category.map(cate => <p cate={cate.id}>
                        <Link to={`/category/${cate.id}`} className='text-decoration-none text-black'>{cate.name}</Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftNav;