import React from 'react';
import useItems from '../Hook/useItems';

const ManageItems = () => {
    const [items] = useItems();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure about delete this product?');
        if(proceed) {

        }
    }
 
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Items</h2>
            {
                items.map(item => <div key={item._id}>
                    
                    <h5>{item.name} <button onClick={() => handleDelete(item._id)}>x</button></h5>
                
                </div>)       
            }
        </div>
    );
};

export default ManageItems;