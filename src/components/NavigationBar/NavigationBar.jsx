import React from 'react';
import { Link } from 'react-router-dom';
import TopOfHeader from '../TopOfHeader/TopOfHeader';

const NavigationBar = () => {
    return (
        <div>
            <TopOfHeader />
            <div className='md:px-32 p-5 flex text-xl gap-7 py-4'>
                <Link to="/">Home</Link>
                <Link to="/add-coffee">Add Coffee</Link>
                <Link to="/update-coffee">Update Coffee</Link>
            </div>
            <hr />
        </div>
    );
};

export default NavigationBar;