import React from 'react';

const Item = ({item}) => {

    const {name, img, description, price, quantity, supplierName} = item;

    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <p><small>Quantity: {quantity}</small></p>
            <p><small>Supplier Name: {supplierName}</small></p>
            <button>Manage</button>
        </div>
    );
};

export default Item;