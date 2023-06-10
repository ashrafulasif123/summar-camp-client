import React from 'react';
import useAllClass from '../../../hooks/useAllClass';

const ManageClasses = () => {

    const { adminclass } = useAllClass()
    console.log(adminclass)
    return (
        <>
            <h2 className='font-extrabold text-success text-3xl text-center p-4'>Manage Classes</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='border border-success text- font-extrabold text-center'>Serial</th>
                            <th className='border border-success text- font-extrabold text-center'>Picture</th>
                            <th className='border border-success text- font-extrabold text-center'>Class <br /> name</th>
                            <th className='border border-success text- font-extrabold text-center'>Instructor <br /> name</th>
                            <th className='border border-success text- font-extrabold text-center'>Instructor <br /> email</th>
                            <th className='border border-success text- font-extrabold text-center'>Available <br /> seats</th>
                            <th className='border border-success text- font-extrabold text-center'>Price</th>
                            <th className='border border-success text- font-extrabold text-center'>Status</th>
                            <th className='border border-success text- font-extrabold text-center'>Feedback </th>
                            <th className='border border-success text- font-extrabold text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            adminclass?.map((instclass, index) =>
                                <tr>
                                    <th className='border border-success text-md'>{index + 1}</th>
                                    <td className='border border-success text-md'><img className='rounded-full w-[40px] h-[40px]' src={instclass?.image} alt="" /></td>
                                    <td className='border border-success text-md'>{instclass?.classname}</td>
                                    <td className='border border-success text-md'>{instclass?.instructor}</td>
                                    <td className='border border-success text-md'>{instclass?.email}</td>
                                    <td className='border border-success text-md'>{instclass?.seats}</td>
                                    <td className='border border-success text-md'>{instclass?.price}</td>
                                    <td className='border border-success text-md'>{instclass?.status}</td>
                                    <td className='border border-success text-md'>{instclass?.feedback}</td>
                                    <td className='border border-success text-md'>
                                        <button className='btn btn-success'>Update</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageClasses;