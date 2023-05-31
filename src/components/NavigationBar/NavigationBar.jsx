import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='flex text-xl gap-7 py-4'>
            <Link to="/">Home</Link>
            <Link to="/add-coffee">Add Coffee</Link>
            <Link to="/update-coffee">Update Coffee</Link>
        </div>
    );
};

export default NavigationBar;