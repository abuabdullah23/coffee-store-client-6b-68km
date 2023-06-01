import React from 'react';
import './CoffeeDetails.css'
import { Link, useLoaderData } from 'react-router-dom';
import { HiArrowLeft } from "react-icons/hi";


const CoffeeDetails = () => {
    const singleCoffee = useLoaderData();
    const { name, chef, supplier, category, taste, details, price, photoUrl } = singleCoffee;
    return (
        <div className='bg-coffee-details'>
            <div className='md:px-44 p-5'>
                <Link to='/' className='flex items-center gap-3'>
                    <HiArrowLeft />
                    <p style={{ fontFamily: 'Rancho' }} className='md:py-5 text-3xl text-[#331A15] py-3 drop-shadow-xl'>Back to home</p>
                </Link>

                <div className='flex items-center gap-5 bg-[#a7a7a72f] md:px-32 md:py-8 p-5 rounded-md'>
                    <div>
                        <img className='w-full h-96' src={photoUrl} alt="" />
                    </div>
                    <div className="h-full ps-5">
                        <h2 style={{ fontFamily: 'Rancho' }} className='text-3xl text-[#331A15] py-3 drop-shadow-xl'>Niceties</h2>
                        <h2 className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Name:</span> {name}</h2>
                        <p className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Chef:</span> {chef}</p>
                        <p className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Taste:</span> {taste}</p>
                        <p className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Category:</span> {category}</p>
                        <p className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Details:</span> {details}</p>
                        <p className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Price:</span> {price} Taka</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;