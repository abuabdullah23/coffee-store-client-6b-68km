import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css'
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { FaCoffee } from "react-icons/fa";

const Home = () => {
    const coffees = useLoaderData();
    return (
        <div className='home-bg'>
            <div className='md:px-36 p-5'>
                <div className='text-center md:px-10 md:py-8'>
                    <p>--- Sip & Savor ---</p>
                    <p className='text-[#331A15] md:px-14 p-5 font-bold text-3xl'>Our Popular Products</p>
                    <div className='flex justify-center'>
                        <p className='bg-[#E3B577] border-2 border-[#331A15] rounded-md flex items-center w-fit'>
                            <button className='font-semibold px-3 py-2'><Link to='/add-coffee'> Add Coffee </Link></button>
                            <FaCoffee className='mr-2' />
                        </p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    {
                        coffees.map(coffee => <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                        ></CoffeeCard>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Home;