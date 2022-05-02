import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h2>Welcome to service detail: {serviceId}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn checkout-btn'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;