import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('https://evening-falls-22965.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return [items, setItems];
}

export default useItems;