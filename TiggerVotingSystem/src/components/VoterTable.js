import { VoterViewRow } from "./VoterViewRow.js";
import { VoterEditRow } from "./VoterEditRow";

//import { voterEditRow } from "./voterEditRowHooks";

export const VoterTable = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th >ID <button type="button" onClick={() => props.onClickSort("id")}>{props.sortButtonText}</button></th>
                    <th >First Name <button type="button" onClick={() => props.onClickSort("firstName")}>{props.sortButtonText}</button></th>
                    <th >Last Name <button type="button" onClick={() => props.onClickSort("lastName")}>{props.sortButtonText}</button></th>
                    <th >Address <button type="button" onClick={() => props.onClickSort("address")}>{props.sortButtonText}</button></th>
                    <th >City <button type="button" onClick={() => props.onClickSort("city")}>{props.sortButtonText}</button></th>
                    <th >Birthdate <button type="button" onClick={() => props.onClickSort("birthdate")}>{props.sortButtonText}</button></th>
                    <th >Email <button type="button" onClick={() => props.onClickSort("email")}>{props.sortButtonText}</button></th>
                    <th >Phone <button type="button" onClick={() => props.onClickSort("phone")}>{props.sortButtonText}</button></th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { props.voters.map(voter => voter.id !== props.editvoterID ?
                     <VoterViewRow key={voter.id} voter={voter} deleteVoter={props.onDeletevoter} editVoter={props.onEditvoterID} /> : 
                     <VoterEditRow key={voter.id} voter={voter} cancel={props.onEditVoterID} save={props.onClickSave} />) }
            </tbody>
        </table>
    );
};

VoterTable.defaultProps = {
    cars: [],
}