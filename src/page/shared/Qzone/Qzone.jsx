import React from 'react';
import bg from '../../../assets/qZone1.png'
import bg2 from '../../../assets/qZone2.png'
import bg3 from '../../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div className='bg-secondary mt-4 rounded p-1 py-2'>
            <img src={bg} alt="" />
            <img src={bg2} alt="" />
            <img src={bg3} alt="" />
        </div>
    );
};

export default Qzone;