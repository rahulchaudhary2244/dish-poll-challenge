import USER_DATA from '../data/USER_DATA';
import { RANKS } from './constants';

/**
 * This function iterates over DishItem array and sets rankId of dish to default value 0 if selectedRankId is already selected in a dish. After that it updates selectedRankId to passed DishItem
 * @param {Array<DishItem>} dishes
 * @param {DishItem} dish - DishItem for which rankId to be changed
 * @param {number} selectedRankId - Selected rankId that needs to be updated
 * @returns {Array<DishItem>} returns array of DishItem
 */
const getDishesWithChangedRank = (dishes, dish, selectedRankId) =>
    dishes.map((item) => {
        if (item.rankId === selectedRankId) return { ...item, rankId: 0 };
        if (item.id === dish.id) return { ...item, rankId: selectedRankId };
        return item;
    });

/**
 * This functions accepts a DishItem and return 'color' from RANKS array with matching rankId
 * @param {DishItem} dish
 * @returns {number} return 'color' from RANKS array with matching rankId
 */
const getRankColorForDish = (dish) =>
    RANKS.find((rank) => rank.id === dish.rankId).color;

/**
 * This functions accepts a DishItem and return 'value' from RANKS array with matching rankId
 * @param {DishItem} dish
 * @returns {number} return 'value' from RANKS array with matching rankId
 */
const getScoreByRankForDish = (dish) =>
    RANKS.find((rank) => rank.id === dish.rankId).value;

/**
 * This fnction return true if user is found in given USER_DATA file else it checks if user data is present in localstorage and based on that it returns true or false
 * @param {User} user
 * @returns {boolean} - return true or false
 */
const authenticateUser = (user) => {
    let userData = USER_DATA.find(
        (item) =>
            user.username === item.username && user.password === item.password
    );
    if (!!userData) return true;
    const REGISTERED_USER_DATA =
        JSON.parse(localStorage.getItem('REGISTERED_USER_DATA')) || [];
    userData = REGISTERED_USER_DATA.find(
        (item) =>
            user.username === item.username && user.password === item.password
    );
    return !!userData;
};

const registerUser = (user) => {
    console.log(user);
    const result = {
        variant: 'warning',
        message: `Username or Password can't be empty`,
    };

    if (!!!user.username.trim() || !!!user.password.trim()) return result;

    if (authenticateUser(user)) {
        result.message = `Username already taken`;
        return result;
    }

    const REGISTERED_USER_DATA =
        JSON.parse(localStorage.getItem('REGISTERED_USER_DATA')) || [];

    REGISTERED_USER_DATA.push(user);

    localStorage.setItem(
        'REGISTERED_USER_DATA',
        JSON.stringify(REGISTERED_USER_DATA)
    );

    result.message = `User Registered!`;
    return result;
};

export {
    getDishesWithChangedRank,
    getRankColorForDish,
    getScoreByRankForDish,
    authenticateUser,
    registerUser,
};
