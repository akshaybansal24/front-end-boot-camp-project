import { VoterForm } from '../components/VoterForm';
//import { useVoterToolStoreContext } from '../contexts/VoterToolStoreContext';
import { useVoterToolStore } from '../hooks/useVoterToolStore';

export const VoterFormContainer = () => {

    //const VoterToolStore = useVoterToolStoreContext();
    const voterToolStore = useVoterToolStore();

    return(
        <VoterForm buttonText="Register Voter" onSubmitVoter={voterToolStore.addVoter}></VoterForm>
    )
}