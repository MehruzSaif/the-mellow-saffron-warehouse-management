import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {

    const { _id, name, img, description, price, quantity, supplierName, sold} = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/item/${id}`);
    }

    return (
        <div className='wrapper'>
            <div className='item container'>
                <img className='item-image' src={img} alt="" />
                <h5><b>{name}</b></h5>
                <p className='description'><b>description: {description}</b></p>
                <p className='my-1'><b>Price: ${price}</b></p>
                <p className='my-1'><b>supplierName: {supplierName}</b></p>
                <p className='mb-4'><small><b>Quantity: {quantity}kg</b></small></p>
                {/* <p className='mt-0'><small><b>Stock: {sold}</b></small></p> */}

                <button onClick={() => navigateToItemDetail(_id)} className='btn btn-css'>Manage</button>
            </div>
        </div>
    );
};

export default Item;