import { CarForm } from '../components/CarForm';
//import { useCarToolStoreContext } from '../contexts/carToolStoreContext';
import { useCarToolStore } from '../hooks/useCarToolStore';

export const CarFormContainer = () => {

    //const carToolStore = useCarToolStoreContext();
    const carToolStore = useCarToolStore();

    return(
        <CarForm buttonText="Add Car" onSubmitCar={carToolStore.addCar}></CarForm>
    )
}