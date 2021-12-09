import { VoterTableContainer } from '../containers/VoterTableContainer';

export const VoterTool = () =>{

    return(
            <VoterTableContainer />

    )
};

VoterTool.defaultProps = {
    voters: [],
}