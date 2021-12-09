import { CarFormContainer } from '../containers/CarFormContainer';
import { CarTableContainer } from '../containers/CarTableContainer';

export const CarTool = () =>{

    return(
        <>
            <CarTableContainer />
            <br></br>
            <CarFormContainer />
        </>
    )
};

CarTool.defaultProps = {
    cars: [],
}