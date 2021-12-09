import { VoterFormContainer } from '../containers/VoterFormContainer';

export const VoterFormTool = () =>{

    return(
      
            <VoterFormContainer />
    )
};

VoterFormTool.defaultProps = {
    voters: [],
}