import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {

    const {itemId} =useParams();
     

    return (
        <div>
            <h1>Please update your item.</h1>
        </div>
    );
};

export default UpdateItem;