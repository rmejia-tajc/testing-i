

// Takes an item and return a new item with durability of a 100.
exports.repair = (item) => {
    return { ...item, durability: 100};
};


// The item's enhancement increases by 1. Max 20.
// The name is updated to reflect the new enhancement level.
exports.success = (item) => {
    const enhanceUp = item.enhancement + 1;
    const updatedName = `[+${enhanceUp}] ${item.baseName}`;

    if(enhanceUp >= 20) {
        return {
            ...item,        
            enhancement: 20,
            displayName: `[PEN] ${item.baseName}`
            };
    } 
    
    if(enhanceUp === 19) {
        return {
            ...item,        
            enhancement: 19,
            displayName: `[TET] ${item.baseName}`
        };
    } 
    
    if(enhanceUp === 18) {
        return {
            ...item,        
            enhancement: 18,
            displayName: `[TRI] ${item.baseName}`
        };
    } 
    
    if(enhanceUp === 17) {
        return {
            ...item,        
            enhancement: 17,
            displayName: `[DUO] ${item.baseName}`
        };
    } 
    
    if(enhanceUp === 16) {
        return {
            ...item,        
            enhancement: 16,
            displayName: `[PRI] ${item.baseName}`
        };
    } 
    
    if(enhanceUp === 0) {
        return {
            ...item,        
            enhancement: 0,
            displayName: `${item.baseName}`
        };
    } else {
    
    return {
        ...item,        
        enhancement: enhanceUp,
        displayName: updatedName,
        };
    }
};


// The durability of the item is decreased by 5 if the item's enhancement is between 0 and 14.
// The durability of the item is decreased by 10 if the item's enhancement is greater than 14.
// If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
// The name is updated to reflect the new enhancement level if it was decreased.
// If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
// If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
exports.fail = (item) => {
    if (item.enhancement < 15 && item.durability < 25) {
      return { ...item };
    }

    if (item.enhancement > 14 && item.durability < 10) {
      return { ...item };
    }
  
    const durability =
      item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
  
    const enhancement =
      item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;
  
    return { ...item, durability, enhancement };

};