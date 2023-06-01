import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-bg md:flex'>
            <div className='w-full'>

            </div>
            <div className='w-full text-white p-5 md:py-44'>
                <h2 className='font-bold text-3xl' style={{ fontFamily: 'Rancho' }}>Would you like a Cup of Delicious Coffee?</h2>
                <p className='py-5'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button style={{ fontFamily: 'Rancho' }} className='py-3 px-5 bg-[#E3B577] rounded-sm hover:bg-[#c58025]'>Learn More</button>
            </div>
        </div>
    );
};

export default Header;