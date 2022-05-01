import React from 'react';
import './Item.css';

const Item = ({ item }) => {

    const { name, img, description, price, quantity, supplierName } = item;

    return (
        <div className='wrapper'>
            <div className='item container'>
                <img className='item-img' src={img} alt="" />
                <h2>{name}</h2>
                <p><b>Price: {price}</b></p>
                <p><small>{description}</small></p>
                <p><small><b>Quantity: {quantity}</b></small></p>
                <p><small><b>Supplier Name: {supplierName}</b></small></p>
                <button>Manage</button>
            </div>
        </div>
    );
};

export default Item;