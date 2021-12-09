import { useList } from './useList';
import { useState } from 'react';

export const SORT_ASC = "ascending";

export const SORT_DESC = "decending";

const sortItems = (unsortedItems, sortCol, sortDir) => {

    const items = [...unsortedItems];

    return items.sort((a,b) => {
        if(a[sortCol] > b[sortCol]){
            if(sortDir === SORT_ASC)
                return 1;
            else
                return -1;
        }
        else if(a[sortCol] < b[sortCol]){
            if(sortDir === SORT_ASC)
                return -1;
            else
                return 1;
        }
        else
            return 0;
    });
}

export const useSortedList = (initialItems, initialCol, initialDir) => {
    const [itemList, addToList, deleteItem, updateItem] = useList(initialItems);

    const [ sortCol, setSortCol ] = useState(initialCol);

    const [ sortDirection, setSortDirection ] = useState(initialDir);
    

    return [sortItems(itemList, sortCol, sortDirection),
             addToList, deleteItem, updateItem,
             sortCol, setSortCol,
             sortDirection, setSortDirection];
}