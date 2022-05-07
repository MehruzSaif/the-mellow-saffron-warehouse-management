import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItemDetail from '../../Hook/useItemDetail';
import './UpdateItem.css';

const UpdateItem = () => {

    const { itemId } = useParams();
    const [item, setItem] = useItemDetail(itemId);

/*     const delivered = () => {
        let Remaining = parseFloat(+item.quantity) - 1;
        let newInventory = { _id, name, img, description, price, updatedItemQuantity, supplierName, sold };

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
}


const restock = (e) => {
    e.preventDefault();
    let updatedQuantity = parseFloat(+item.quantity) + parseFloat(e.target.upQuantity.value);
    let newInventory = { _id, name, img, description, price, updatedItemQuantity, supplierName, sold };

    setItem(newInventory);

    const url = `http://localhost:5000/item/${itemId}`
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(newInventory),
        headers: {
            'Content-Type': 'application/json',
        }
    })

        .then((res) => rs.json())
        .then(data => {
            toast('Delivery Success!')
        })

} */

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

            <div className='container'>
                <input style={{ width: "200px", display: "flex" }} className='container' type="number" placeholder='Enter Stock Number' name="" id="" />
                <br />

                <input style={{ width: "120px", display: "flex" }} className='container btn btn-success' type="submit" value="Restock item" />

            </div>

        </div>
    );
};



export default UpdateItem;