import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../Hook/useItemDetail';
import './UpdateItem.css';

const UpdateItem = () => {

    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);

    const handleRestockItem = event => {
        event.preventDefault();

    }

    const { _id, name, img, description, price, quantity, supplierName, sold} = item;

    return (
        <div>
            <div className='text-center my-5'>
                <h1>Please update your item: {item.name}</h1>
            </div>

            <div className='w-50 mx-auto my-5 update-item'>
                <div>
                    <img className='item-img' src={img} alt="" />
                </div>

                <div className="update-item-details-container">
                    <div className='update-item-details'>
                        <h5>{name}</h5>
                        <p className='description'><small>description: {description}</small></p>
                        <p><b>Price: ${price}</b></p>
                        <p><b>supplierName: {supplierName}</b></p>
                        <p><small><b>Quantity: {quantity}kg</b></small></p>
                        <p><small><b>Stock: {sold}</b></small></p>
                    </div>

                    <div className='delivered-container'>
                        <button className='btn btn-danger'>Delivered</button>
                    </div>
                </div>
            </div>

            <div onSubmit={handleRestockItem} className='container'>
                <input style={{ width: "200px", display: "flex" }} className='container' type="number" placeholder='Enter Stock Number' name="" id="" />
                <br />

                <input style={{ width: "120px", display: "flex" }} className='container btn btn-success' type="submit" value="Restock item" />

            </div>

        </div>
    );
};

export default UpdateItem;