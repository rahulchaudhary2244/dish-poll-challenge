const getDishesWithChangedRank = (dishes, dish, selectedRankId) =>
    dishes.map((item) => {
        if (item.rankId === selectedRankId) return { ...item, rankId: 0 };
        if (item.id === dish.id) return { ...item, rankId: selectedRankId };
        return item;
    });

export { getDishesWithChangedRank };
