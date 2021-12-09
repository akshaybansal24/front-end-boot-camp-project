 import { CarTable } from '../components/CarTable';
// import { useCarToolStoreContext } from '../contexts/carToolStoreContext';
import { useCarToolStore } from '../hooks/useCarToolStore';

// export const CarTableContainer = () => {

//     const carToolStore = useCarToolStoreContext();
    
//     return(
//         <CarTable cars={carToolStore.cars} 
//                 editCarID={carToolStore.editCarId} 
//                 onEditCarID={carToolStore.setEditCarId} 
//                 onDeleteCar={carToolStore.deleteCar} 
//                 onClickSave={carToolStore.saveCar} 
//                 onClickSort={carToolStore.updateSort}
//                 sortButtonText={carToolStore.sortCol + "-" + carToolStore.sortDir} />
//     )
// }

export const CarTableContainer = () => {
    const carToolStore = useCarToolStore();
        return(
        <CarTable cars={carToolStore.cars} 
                editCarID={carToolStore.editCarId}
                onEditCarID={carToolStore.editCar}
                onDeleteCar={carToolStore.deleteCar} 
                onClickSave={carToolStore.saveCar} 
                onClickSort={carToolStore.sortCar}
                sortButtonText={carToolStore.carsSort.sortCol + "-" + carToolStore.carsSort.sortDir} />
    )
}