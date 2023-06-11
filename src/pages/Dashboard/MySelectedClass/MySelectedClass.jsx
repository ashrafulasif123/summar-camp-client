import React from 'react';
import useCart from '../../../hooks/useCart';

const MySelectedClass = () => {
    const {cartclasses} = useCart()
    console.log(cartclasses)
    return (
        <div>
            <h2>My Selected Class: {cartclasses?.length} </h2>
        </div>
    );
};

export default MySelectedClass;