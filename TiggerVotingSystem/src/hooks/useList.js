import { useState } from 'react';

export const useList = initialList => {

    const [itemList, updateItemList] = useState(initialList);

    const addToList = newItem => {
        updateItemList([
            ...itemList,
            {
                ...newItem,
                id: Math.max(...itemList.map(item => item.id) , 0) + 1,
            }
        ]);
    };

    const deleteItem = itemId => {
        updateItemList(
            itemList.filter(item => item.id !== itemId)
        );
    }

    const updateItem = updatedItem => {
        const newList = [...itemList];
        const updatedItemIndex = newList.findIndex(item => item.id === updatedItem.id);
        newList[updatedItemIndex] = updatedItem;
        updateItemList(newList);
    }

    return [ itemList, addToList, deleteItem, updateItem ];
};