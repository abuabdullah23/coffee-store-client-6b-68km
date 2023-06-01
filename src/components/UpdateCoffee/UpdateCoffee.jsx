import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './UpdateCoffee.css'
import { HiArrowLeft } from "react-icons/hi";
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffeeDetailsForUpdate = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, quantity, price, photoUrl } = coffeeDetailsForUpdate;


    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const photoUrl = form.photoUrl.value;
        const updatedCoffeeDetails = { name, chef, supplier, taste, category, details, quantity, price, photoUrl }
        console.log(updatedCoffeeDetails)

        // send updated data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffeeDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                }
            })
    }

    return (
        <div className='bg-updateCoffee'>
            <div className='md:px-44 p-5 '>
                <Link to='/' className='flex items-center gap-3'>
                    <HiArrowLeft />
                    <p style={{ fontFamily: 'Rancho' }} className='md:py-5 text-3xl text-[#331A15] py-3 drop-shadow-xl'>Back to home</p>
                </Link>
                <div className='text-center md:px-10 md:py-8 bg-[#F4F3F0] rounded-xl'>
                    <div className='flex items-center justify-between'>
                        <div className='w-96'>
                            <img src={photoUrl} alt="" />
                        </div>
                        <div>
                            <h2 className='text-3xl font-semibold py-4 text-[#331A15]' style={{ fontFamily: 'Rancho' }}>Update Existing Coffee Details</h2>
                            <p className='text-slate-600 md:px-14 p-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                    </div>

                    <form onSubmit={handleUpdateCoffee} className='text-left mt-10 p-5'>
                        {/* row 1 */}
                        <div className='md:flex gap-5 mb-4'>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Name</p>
                                <input type="text" name="name" id="name" placeholder="Enter coffee name" defaultValue={name} className='py-3 px-5 w-full rounded-md' />
                            </div>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Chef</p>
                                <input type="text" name="chef" id="chef" placeholder="Enter coffee chef" defaultValue={chef} className='py-3 px-5 w-full rounded-md' />
                            </div>
                        </div>

                        {/* row 2 */}
                        <div className='md:flex gap-5 mb-4'>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Supplier</p>
                                <input type="text" name="supplier" id="supplier" placeholder="Enter coffee supplier" defaultValue={supplier} className='py-3 px-5 w-full rounded-md' />
                            </div>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Taste</p>
                                <input type="text" name="taste" id="taste" placeholder="Enter coffee taste" defaultValue={taste} className='py-3 px-5 w-full rounded-md' />
                            </div>
                        </div>

                        {/* row 3 */}
                        <div className='md:flex gap-5 mb-4'>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Category</p>
                                <input type="text" name="category" id="category" placeholder="Enter coffee category" defaultValue={category} className='py-3 px-5 w-full rounded-md' />
                            </div>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Details</p>
                                <input type="text" name="details" id="details" placeholder="Enter coffee details" defaultValue={details} className='py-3 px-5 w-full rounded-md' />
                            </div>
                        </div>

                        {/* row 4 */}
                        <div className='md:flex gap-5 mb-4'>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Quantity</p>
                                <input type="text" name="quantity" id="quantity" placeholder="Enter coffee quantity" defaultValue={quantity} className='py-3 px-5 w-full rounded-md' />
                            </div>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Price</p>
                                <input type="text" name="price" id="price" placeholder="Enter coffee price" defaultValue={price} className='py-3 px-5 w-full rounded-md' />
                            </div>
                        </div>
                        {/* row 5 */}
                        <div className='mb-4'>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Photo Url</p>
                                <input type="text" name="photoUrl" id="photoUrl" placeholder="Enter coffee PhotoUrl" defaultValue={photoUrl} className='py-3 px-5 w-full rounded-md' />
                            </div>
                        </div>

                        {/* row 6 */}
                        <input type="submit" style={{ fontFamily: 'Rancho' }} value="Update Coffee Details" className='mt-5 py-3 px-5 rounded-md bg-[#d3ac59] w-full mb-12 hover:bg-[#331A15] hover:text-white text-xl' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;