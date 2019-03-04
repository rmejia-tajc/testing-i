exports.repair = (item) => {
    //takes an item and return a new item with durability of a 100
    return { ...item, durability: 100};
};

exports.success = (item) => {
    const enhanceUp = item.enhancement + 1;
    // const updatedName = 'X';

    return {
        ...item,        
        enhancement: enhanceUp,
        // displayName: updatedName
    };
};