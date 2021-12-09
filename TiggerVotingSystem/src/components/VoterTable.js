import { VoterViewRow } from "./VoterViewRow.js";
import { VoterEditRow } from "./VoterEditRow";

//import { voterEditRow } from "./voterEditRowHooks";

export const VoterTable = props => {
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
                { props.voters.map(voter => voter.id !== props.editvoterID ?
                     <VoterViewRow key={voter.id} voter={voter} deletevoter={props.onDeletevoter} editvoter={props.onEditvoterID} /> : 
                     <VoterEditRow key={voter.id} voter={voter} cancel={props.onEditVoterID} save={props.onClickSave} />) }
            </tbody>
        </table>
    );
};

VoterTable.defaultProps = {
    cars: [],
}