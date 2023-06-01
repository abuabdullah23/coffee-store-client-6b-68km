import React from 'react';
import { BsEyeFill } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, taste, category, details, quantity, price, photoUrl } = coffee;
    // update coffee card after delete : : Step 3
    // coffees, setCoffees are destructured from home components

    // for delete item
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure Delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                        }
                        // update coffee card after delete : Step 4
                        const remaining = coffees.filter(cof => cof._id !== _id)
                        setCoffees(remaining)
                    })
            }
        })
    }

    return (
        <div>
            <div className="card card-side bg-[#a7a7a762] p-4 flex gap-3 items-center rounded-md">
                <img className='object-cover' src={photoUrl} alt="Coffee Image" />
                <div className='flex gap-5 justify-between w-full items-center'>
                    <div className="h-full">
                        <h2 className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Name:</span> {name}</h2>
                        <p className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Chef:</span> {chef}</p>
                        <p className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Price:</span> {price} Taka</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Link to={`/coffee-details/${_id}`}>
                            <button className='bg-[#D2B48C] hover:bg-[#7c6950] p-3 rounded-md text-white'>
                                <BsEyeFill className='w-6 h-6' />
                            </button>
                        </Link>
                        <Link to={`/update-coffee/${_id}`} ><button className='bg-[#3C393B] hover:bg-[#111011] p-3 rounded-md text-white'>
                            <HiPencil className='w-6 h-6' />
                        </button></Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className='bg-[#EA4744] hover:bg-[#dd0400] p-3 rounded-md text-white'>
                            <MdDelete className='w-6 h-6' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;