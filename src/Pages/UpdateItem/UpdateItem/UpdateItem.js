import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './UpdateItem.css';

const UpdateItem = () => {

    const { itemId } = useParams();
    const [item, setItem] = useState({})
    let {img, name, price, description, supplierName, quantity} = item;

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then((data) => setItem(data));
    }, [])

    const delivered = () => {
        let Remaining = parseFloat(+item.quantity) - 1;
        let newInventory = {  name, img, description, price, quantity: Remaining, supplierName };

        setItem(newInventory);

        const url = `http://localhost:5000/item/${itemId}`
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(newInventory),
            headers: {
                'Content-Type': 'application/json',
            }
        })

            .then((res) => res.json())
            .then(data => {
                toast('Delivery Success!')
            })
        }


const restock = e => {
    e.preventDefault();
    let updatedQuantity = parseInt(+item.quantity) + parseInt(e.target.upQuantity.value);
    let newInventory = { name, img, description, price, quantity: updatedQuantity, supplierName};

    setItem(newInventory);

    const url = `http://localhost:5000/item/${itemId}`
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(newInventory),
        headers: {
            'Content-Type': 'application/json',
        }
    })

        .then((res) => res.json())
        .then(data => {
            toast('Delivery Success!', data);
        })
    }



return (
    <div>
            <div className='text-center my-5'>
                <h1><b>Please update your item: {item.name}</b></h1>
            </div>

            <div className='w-50 mx-auto my-5 update-item'>
                <div>
                    <img className='item-img' src={img} alt="" />
                </div>

                <div className="update-item-details-container">
                    <div className='update-item-details'>
                        <h5><b>{name}</b></h5>
                        <p className='description'><small>{description}</small></p>
                        <p><b>Price: ${price}</b></p>
                        <p><b>supplierName: {supplierName}</b></p>
                        <p><small><b>Quantity: {quantity}kg</b></small></p>
                    </div>

                    <div className='delivered-container'>
                        <button onClick={() => delivered(quantity)} className='btn btn-danger'>Delivered</button>
                    </div>
                </div>
            </div>

            <form onSubmit={restock} className='container'>
                <input style={{ width: "200px", display: "flex" }} className='container' type="number" placeholder='Enter Stock Number' required />
                <br />

                <input style={{ width: "120px", display: "flex" }} className='container btn btn-success' type="submit" value="Restock item" />

            </form>

        </div>
    );

}

export default UpdateItem;