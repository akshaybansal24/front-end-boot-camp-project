// import { useSortedList, SORT_ASC, SORT_DESC } from '../hooks/useSortedList';
// import { useState } from "react";

import { useEffect, useMemo } from 'react';
import  {useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    addCar,
    deleteCar,
    saveCar,
    createEditCarAction,
    createSortCarAction,
    refreshCars
} from '../actions/carToolActions';
import { sortedCarsSelector } from '../selectors/carToolSelectors';

// export const useCarToolStore = initialCars => {

//     const [ editCarId, setEditCarId ] = useState(-1);

//     const [ 
//         cars, addCarToList, deleteCarFromList, saveCarToList,
//         sortCol, setSortCol,
//         sortDir, setSortDir
//     ] = useSortedList(initialCars, 'id', SORT_ASC);
    
//     const addCar = (newCar) =>{
//         addCarToList(newCar);
//         setEditCarId(-1);
//     };

//     const deleteCar = (removedCarID) => {
//         deleteCarFromList(removedCarID);
//         setEditCarId(-1);
//     }

//     const saveCar = (updatedCar) => {
//         saveCarToList(updatedCar);
//         setEditCarId(-1);
//     }

//     const updateSort = (newSortColName) => {
//         if(sortCol === newSortColName){
//             if(sortDir === SORT_ASC)
//                 setSortDir(SORT_DESC);
//             else
//                 setSortDir(SORT_ASC);
//         }else{
//             setSortDir(SORT_ASC);
//         }
//         setSortCol(newSortColName);
//     }

//     return {
//         cars, 
//         addCar, 
//         deleteCar, 
//         saveCar, 
//         updateSort, 
//         sortCol,
//         sortDir,
//         editCarId,
//         setEditCarId
//     }
// }

export const useCarToolStore = () => {

    const cars = useSelector(sortedCarsSelector);
    const carsSort = useSelector(state => state.carsSort);
    const editCarId = useSelector(state => state.editCarId);

    const dispatch = useDispatch();

    const boundActions = useMemo( () => bindActionCreators({
        refreshCars,
        addCar,
        deleteCar,
        editCar: createEditCarAction,
        sortCar: createSortCarAction,
        saveCar
    }, dispatch), [dispatch] );

    useEffect(() => {
        boundActions.refreshCars();
    }, [boundActions]);

    return {
        cars,
        carsSort,
        editCarId,
        ...boundActions
    };
};