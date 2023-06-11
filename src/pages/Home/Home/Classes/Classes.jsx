import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Class from './Class';

const Classes = () => {

    const { data: classes = [] } = useQuery({
        queryKey: ['approvedclass'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/classes?status=approved')
            return res.data;
        },

    })

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    classes.map(clas => <Class key={clas?._id} clas={clas}></Class>)
                }
            </div>
        </div>

    );
};

export default Classes;