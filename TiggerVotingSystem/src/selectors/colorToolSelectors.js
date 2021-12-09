const sortColors = (unsortedItems, sortCol, sortDir) => {
    const items = [...unsortedItems];
    return items.sort((a,b) => {
        if(a[sortCol] > b[sortCol]){
            if(sortDir === 'Ascending') //SORT_ASC
                return 1;
            else
                return -1;
        }
        else if(a[sortCol] < b[sortCol]){
            if(sortDir === 'Ascending') //SORT_ASC
                return -1;
            else
                return 1;
        }
        else
            return 0;
    });
}

export const sortedColorsSelector = state => {
    return sortColors(state.colors, state.colorsSort.sortCol, state.colorsSort.sortDir);
}