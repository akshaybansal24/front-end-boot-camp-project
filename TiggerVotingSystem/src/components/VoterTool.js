import { VoterFormContainer } from '../containers/VoterFormContainer';
import { VoterTableContainer } from '../containers/VoterTableContainer';

export const VoterTool = () =>{

    return(
        <>
            <VoterTableContainer />
            <br></br>
            <VoterFormContainer />
        </>
    )
};

VoterTool.defaultProps = {
    cars: [],
}