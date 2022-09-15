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

export { getDishesWithChangedRank, getRankColorForDish, getScoreByRankForDish };
