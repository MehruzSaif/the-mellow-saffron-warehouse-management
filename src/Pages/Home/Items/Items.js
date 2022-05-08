import { useNavigate } from 'react-router-dom';
import useItems from '../../Hook/useItems';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {

    const [items] = useItems([]);

    const itemData = items.slice(0, 6);

    const navigate = useNavigate();


    return (
        <div id='items' className='container'>
            <div className='container'>
                <h1 className='items-title my-5'><b>Items Available</b></h1>
                <div className="items-container">
                    {
                        itemData.map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </div>


            <div className='container mx-auto w-25 navigation-btn'>
                <button className='my-5 nav-btn' onClick={() => navigate('/manage')}>Manage Inventories</button>
            </div>


        </div>
    );
};

export default Items;