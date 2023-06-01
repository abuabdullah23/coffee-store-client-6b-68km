import React from 'react';
import { BsEyeFill } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, category, details, quantity, price, photoUrl } = coffee;

    return (
        <div className='mt-10'>
            <div class="card card-side bg-[#a7a7a762] p-4 flex gap-3 items-center rounded-md">
                <img className='object-cover' src={photoUrl} alt="Coffee Image" />
                <div className='flex gap-5 justify-between w-full items-center'>
                    <div className="h-full">
                        <h2 className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Name:</span> {name}</h2>
                        <p className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Chef:</span> {chef}</p>
                        <p className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Price:</span> {price} Taka</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <button className='bg-[#D2B48C] p-3 rounded-md text-white'>
                            <BsEyeFill className='w-6 h-6' />
                        </button>
                        <button className='bg-[#3C393B] p-3 rounded-md text-white'>
                            <HiPencil className='w-6 h-6' />
                        </button>
                        <button className='bg-[#EA4744] p-3 rounded-md text-white'>
                            <MdDelete className='w-6 h-6' />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;