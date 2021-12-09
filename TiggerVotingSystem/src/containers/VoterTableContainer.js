 import { VoterTable } from '../components/VoterTable';
// import { useVoterToolStoreContext } from '../contexts/voterToolStoreContext';
import { useVoterToolStore } from '../hooks/useVoterToolStore';

export const VoterTableContainer = () => {
    const voterToolStore = useVoterToolStore();
        return(
        <VoterTable voters={voterToolStore.voters} 
                editVoterID={voterToolStore.editVoterId}
                onEditVoterID={voterToolStore.editVoter}
                onDeleteVoter={voterToolStore.deleteVoter} 
                onClickSave={voterToolStore.saveVoter} 
                onClickSort={voterToolStore.sortVoter}
                sortButtonText={voterToolStore.votersSort.sortCol + "-" + voterToolStore.votersSort.sortDir} />
    )
}