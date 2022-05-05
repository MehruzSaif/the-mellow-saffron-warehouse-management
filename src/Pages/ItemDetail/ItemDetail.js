import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemDetail.css';

const ServiceDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`

        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))

    }, [])

    return (
        <div>
            <h2>You are about to buy: {item.name}</h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn checkout-btn'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;