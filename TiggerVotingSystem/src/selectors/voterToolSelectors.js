const sortItems = (unsortedItems, sortCol, sortDir) => {
    console.log(sortCol);
    console.log(sortDir);

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

export const sortedVotersSelector = state => {
    return sortItems(state.voters, state.votersSort.sortCol, state.votersSort.sortDir);
}