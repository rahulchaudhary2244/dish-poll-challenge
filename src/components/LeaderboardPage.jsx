import React, { useContext } from 'react';
import Header from './Header';
import dishContext from '../context/DishContext';

const LeaderboardPage = () => {
    const [dishes, setDishes] = useContext(dishContext);
    console.log(dishes.filter((dish) => dish.rankId > 0));
    return (
        <>
            <Header showPrevious={true} />
        </>
    );
};

export default LeaderboardPage;
