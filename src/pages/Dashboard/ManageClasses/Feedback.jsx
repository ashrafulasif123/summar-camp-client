import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosProtected from '../../../hooks/useAxiosProtected';

const Feedback = () => {
    const {id} = useParams()
    const [axiosProtect] =  useAxiosProtected()
    const handleSubmit = event =>{
        event.preventDefault()
        // const feedBk = event.target.feedback.value;
        // console.log(id, feedBk)
        axiosProtect.patch(`/users/adminfeedback/${id}`, {feedBk : event.target.feedback.value})
        .then(data =>{
            console.log(data)
        })
    }
    
    return (
        <div className='w-full text-center'>
            <h2 className='text-3xl my-3 font-bold text-success'>Admins Feedback</h2>
            <form onSubmit={handleSubmit} className=''>
                <textarea name='feedback' placeholder="FeedBack" className="textarea textarea-bordered w-1/2 textarea-lg h-44 mb-4" ></textarea> <br />
                <button type='submit' className='btn btn-lg btn-success'>Submit Feedback</button>
            </form>
        </div>
    );
};

export default Feedback;