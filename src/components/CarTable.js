import { CarViewRow } from "./CarViewRow.js";
import { CarEditRow } from "./CarEditRow";

//import { CarEditRow } from "./CarEditRowHooks";

export const CarTable = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th name="idHeader">ID <button type="button" onClick={() => props.onClickSort("id")}>{props.sortButtonText}</button></th>
                    <th name="makeHeader">MAKE <button type="button" onClick={() => props.onClickSort("make")}>{props.sortButtonText}</button></th>
                    <th name="modelHeader">MODEL <button type="button" onClick={() => props.onClickSort("model")}>{props.sortButtonText}</button></th>
                    <th name="yearHeader">YEAR <button type="button" onClick={() => props.onClickSort("year")}>{props.sortButtonText}</button></th>
                    <th name="colorHeader">COLOR <button type="button" onClick={() => props.onClickSort("color")}>{props.sortButtonText}</button></th>
                    <th name="priceHeader">PRICE <button type="button" onClick={() => props.onClickSort("price")}>{props.sortButtonText}</button></th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { props.cars.map(car => car.id !== props.editCarID ?
                     <CarViewRow key={car.id} car={car} deleteCar={props.onDeleteCar} editCar={props.onEditCarID} /> : 
                     <CarEditRow key={car.id} car={car} cancel={props.onEditCarID} save={props.onClickSave} />) }
            </tbody>
        </table>
    );
};

CarTable.defaultProps = {
    cars: [],
}