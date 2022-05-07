import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../Hook/useItemDetail';
import './ItemDetail.css';

const ServiceDetail = () => {
    const { itemId } = useParams();

    const [item] = useItemDetail(itemId); // using hook useItemDetail

    return (
        <div>
            <h2>You are about to update: {item.name}</h2>
            <div className='text-center'>
                <Link to={`/updateitem/${itemId}`}>
                    <button className='btn checkout-btn mt-5'>Update Item</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;