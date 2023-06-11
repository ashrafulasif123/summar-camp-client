import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Class = ({ clas }) => {
    const {user} = useContext(AuthContext) 
    const {classname, instructor, email, seats, price, image, enrolledstudent, _id} = clas;
    const navigate = useNavigate()
    const handleCourse = id =>{
        if(!user?.email){
            Swal.fire({
                position: 'middle',
                icon: 'error',
                title: 'log in before selecting the course',
                showConfirmButton: false,
                timer: 2500
            })
            return navigate('/login')
        }
        console.log('user successfully login')
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{classname}</h2>
                <p><span className='font-semibold'>Instructor Name:</span> {instructor}</p>
                <p><span className='font-semibold'>Available Seats:</span> {seats}</p>
                <p><span className='font-semibold'>Price: </span>${price}</p>
                <div className="card-actions">
                    <button onClick={ () => handleCourse(_id)} disabled={seats === 0} className="btn btn-success">Select Course</button>
                </div>
            </div>
        </div>
    );
};

export default Class;

/**
 * Image
Name
Instructor name
Available seats
Price
Select Button. If the user is not logged in, then tell the user to log in before selecting the course. This button will be disabled if:
Available seats are 0
Logged in as admin/instructor
The class card background will be red if the available seats are 0.
 */