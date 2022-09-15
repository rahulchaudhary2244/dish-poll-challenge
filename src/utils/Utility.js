import { RANKS } from './constants';

const getDishesWithChangedRank = (dishes, dish, selectedRankId) =>
    dishes.map((item) => {
        if (item.rankId === selectedRankId) return { ...item, rankId: 0 };
        if (item.id === dish.id) return { ...item, rankId: selectedRankId };
        return item;
    });

const getRankColorForDish = (dish) =>
    RANKS.find((rank) => rank.id === dish.rankId).color;

const getScoreByRankForDish = (dish) =>
    RANKS.find((rank) => rank.id === dish.rankId).value;

export { getDishesWithChangedRank, getRankColorForDish, getScoreByRankForDish };
