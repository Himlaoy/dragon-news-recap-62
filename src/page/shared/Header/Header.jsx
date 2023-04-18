import React from 'react';
import bg from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img src={bg} alt="" />
            <div>
                <p className='text-success'><small>Journalism Without Fear or Favour</small></p>
            </div>
            <div>
                <p>{moment().format("dddd, MMMM, YYYY")}</p>
            </div>
            <div>
                <Button variant="danger">Latest</Button>
            </div>
        </div>
    );
};

export default Header;