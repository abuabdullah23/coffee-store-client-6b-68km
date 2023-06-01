import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import logo1 from '../../assets/images/more/logo1.png';
import toHederBg from '../../assets/images/more/top-header-bg-01.png';
import './TopOfHeader.css'

const TopOfHeader = () => {

    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Droid Sans', 'Chilanka', 'Rancho', 'Raleway']
            }
        });
    }, []);

    return (
        <div className='flex justify-center bg-zinc-800'>
            {/* <img src={toHederBg} alt="" className='w-full' /> */}
            <div className='py-2'>
                <div style={{ fontFamily: 'Rancho' }} className='flex items-center gap-5 mx-auto'>
                    <img className='w-14' src={logo1} alt="Espresso Emporium Logo" title='Espresso Emporium Logo' />
                    <p className='text-center text-4xl text-white'>Espresso Emporium</p>
                </div>
            </div>
        </div>
    );
};

export default TopOfHeader;