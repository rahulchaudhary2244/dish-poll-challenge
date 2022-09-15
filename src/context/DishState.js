import axios from 'axios';
import { useEffect, useState } from 'react';
import DishContext from './DishContext';

const DishState = (props) => {
    const [dishes, setDishes] = useState([]);

    const fetchDishes = async () => {
        try {
            const API_URL = `https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`;
            const res = await axios.get(API_URL);
            const buildDishes = res.data.map((dish) => {
                return { ...dish, rankId: 0 };
            });
            setDishes(buildDishes);
        } catch (err) {
            console.log('Dishes data not fetched');
            return [];
        }
    };

    useEffect(() => {
        fetchDishes();
    }, []);

    return (
        <DishContext.Provider value={[dishes, setDishes]}>
            {props.children}
        </DishContext.Provider>
    );
};

export default DishState;
