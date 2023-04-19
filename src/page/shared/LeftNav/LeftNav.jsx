import React, { useEffect, useState } from 'react';
import { Collapse } from 'react-bootstrap';

const LeftNav = () => {
    const [category, setCategory] = useState([])
    console.log(category)


    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategory(data))
        .catch(error=>console.log(error.message))
    },[])

    return (
        <div>
            <h4>Left nav is coming</h4>
        </div>
    );
};

export default LeftNav;