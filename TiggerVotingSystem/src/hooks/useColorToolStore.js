// import { useSortedList, SORT_ASC, SORT_DESC } from '../hooks/useSortedList.js';

// export const useColorToolStore = initialColors => {

//     const [ 
//         colors, 
//         addColor, removeColor, ,
//         sortCol, setSortCol,
//         sortDirection, setSortDirection
//     ] = useSortedList([...initialColors], 'id', SORT_ASC);

//     const updateSortColor = () => {
//         if(sortCol === 'id'){
//             setSortCol('name');
//             setSortDirection(SORT_ASC);
//         }
//         else if(sortCol === 'name' && sortDirection === SORT_ASC){
//             setSortDirection(SORT_DESC);
//         }
//         else{
//             setSortCol('id');
//             setSortDirection(SORT_ASC);
//         }
//     };

//     return {
//         colors, addColor, removeColor, sortCol, sortDirection, updateSortColor
//     };
// }
 
import { useEffect, useMemo } from 'react';
import  {useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    createSortColorAction,
    refreshColors,
    addColor,
    deleteColor
} from '../actions/colorToolActions';
import { sortedColorsSelector } from '../selectors/colorToolSelectors';

export const useColorToolStore = () => {

    const colors = useSelector(sortedColorsSelector);
    const colorsSort = useSelector(state => state.colorsSort);

    const dispatch = useDispatch();

    const boundActions = useMemo(() => bindActionCreators({
        refreshColors,
        addColor,
        deleteColor,
        sortColor: createSortColorAction
    }, dispatch), [dispatch]);

    useEffect(() => {
        boundActions.refreshColors();
    }, [boundActions]);

    //const sortedColors = sortColors(colors, sortDir);
    console.log("Colors to render")
    console.log(colors);

    return {
        colors,
        colorsSort,
        ...boundActions
    };

};