import React from 'react';
import { Table } from 'react-bootstrap';
import useItems from '../Hook/useItems';
import './ManageItems.css';

const ManageItems = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');

        if (proceed) {
            const url = `https://evening-falls-22965.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(service => service._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Manage your products</h2>
            {
                items.map(product => <div key={product._id}>
                    <Table class="css-serial" striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>*</th>
                                <th>Name</th>
                                <th>ID Number</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{}</td>
                                <td>{product.name}</td>
                                <td>{product._id}</td>
                                <td>${product.price}</td>
                                <td><button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    </Table>
                    </div>)
            }

        </div>
    );
};

export default ManageItems;