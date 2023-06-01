import React from 'react';
import bg from '../../assets/images/more/11.png'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const quantity = form.quantity.value;
        const photoUrl = form.photoUrl.value;
        const newCoffee = { name, chef, supplier, taste, category, details, quantity, photoUrl }

        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }


    return (
        <div className='relative'>
            <img src={bg} alt="" />
            <div className='absolute top-0 md:mx-44 p-5 '>
                <p className='md:py-5 py-3'>Back to home</p>
                <div className='text-center md:px-10 md:py-8 bg-[#F4F3F0] rounded-xl'>
                    <h2 className='text-3xl font-bold py-4'>Add New Coffee</h2>
                    <p className='text-slate-600 md:px-14 p-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form onSubmit={handleAddCoffee} className='text-left mt-10 p-5'>
                        {/* row 1 */}
                        <div className='md:flex gap-5 mb-4'>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Name</p>
                                <input type="text" name="name" id="name" placeholder="Enter coffee name" className='py-3 px-5 w-full rounded-md' />
                            </div>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Chef</p>
                                <input type="text" name="chef" id="chef" placeholder="Enter coffee chef" className='py-3 px-5 w-full rounded-md' />
                            </div>
                        </div>

                        {/* row 2 */}
                        <div className='md:flex gap-5 mb-4'>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Supplier</p>
                                <input type="text" name="supplier" id="supplier" placeholder="Enter coffee supplier" className='py-3 px-5 w-full rounded-md' />
                            </div>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Taste</p>
                                <input type="text" name="taste" id="taste" placeholder="Enter coffee taste" className='py-3 px-5 w-full rounded-md' />
                            </div>
                        </div>

                        {/* row 3 */}
                        <div className='md:flex gap-5 mb-4'>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Category</p>
                                <input type="text" name="category" id="category" placeholder="Enter coffee category" className='py-3 px-5 w-full rounded-md' />
                            </div>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Details</p>
                                <input type="text" name="details" id="details" placeholder="Enter coffee details" className='py-3 px-5 w-full rounded-md' />
                            </div>
                        </div>

                        {/* row 4 */}
                        <div className='md:flex gap-5 mb-4'>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Quantity</p>
                                <input type="text" name="quantity" id="quantity" placeholder="Enter coffee quantity" className='py-3 px-5 w-full rounded-md' />
                            </div>
                            <div className='w-full'>
                                <p className='text-xl ps-5 font-semibold mb-2'>Photo Url</p>
                                <input type="text" name="photoUrl" id="photoUrl" placeholder="Enter coffee PhotoUrl" className='py-3 px-5 w-full rounded-md' />
                            </div>
                        </div>
                        {/* row 5 */}
                        <input type="submit" value="Add Coffee" className='mt-5 py-3 px-5 rounded-md bg-[#d3ac59] w-full mb-12 hover:bg-[#463000] hover:text-white' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;