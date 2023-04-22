import React from 'react';
import NavigationBar from '../page/shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LogInLaOut = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default LogInLaOut;