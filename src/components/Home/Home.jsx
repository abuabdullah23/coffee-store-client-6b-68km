import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Home.css'
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { FaCoffee } from "react-icons/fa";

const Home = () => {
    const loadedCoffees = useLoaderData();
    // update coffee card after delete : Step 1
    const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div className='home-bg'>
            <div className='md:px-36 p-5'>
                <div className='text-center md:px-10 md:py-8'>
                    <p className='m-0 py-1 text-xl'>--- Sip & Savor ---</p>
                    <p className='text-[#331A15] md:px-14 p-5 font-bold text-3xl' style={{ fontFamily: 'Rancho' }}>Our Popular Products</p>
                    <div className='flex justify-center'>
                        <p className='bg-[#E3B577] border-2 border-[#331A15] rounded-md flex items-center w-fit'>
                            <button className='font-semibold px-3 py-2 text-white' style={{ fontFamily: 'Rancho' }}><Link to='/add-coffee'> Add Coffee </Link></button>
                            <FaCoffee className='mr-2' />
                        </p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5 mt-5'>
                    {
                        coffees.map(coffee => <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            // update coffee card after delete : Step 2 : go to coffee card comp
                            coffees={coffees}
                            setCoffees={setCoffees}
                        ></CoffeeCard>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Home;