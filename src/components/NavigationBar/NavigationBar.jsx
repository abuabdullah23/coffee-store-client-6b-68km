import React from 'react';
import { Link } from 'react-router-dom';
import TopOfHeader from '../TopOfHeader/TopOfHeader';
import ActiveLink from '../ActiveLink/ActiveLink';

const NavigationBar = () => {
    return (
        <div>
            <TopOfHeader />
            <div className='md:px-32 p-5 flex text-xl gap-7 py-4'>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/add-coffee">Add Coffee</ActiveLink>
                
            </div>
            <hr />
        </div>
    );
};

export default NavigationBar;