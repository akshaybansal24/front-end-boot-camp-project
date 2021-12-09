import { BallotList } from './BallotList.js';

import { useElectionToolStore } from '../hooks/useElectionToolStore';
import {ElectionResults} from "./ElectionResults";

export const BallotTool = () =>{

    const onVote = () => {
        console.log("Vote");
    }

    const store = useElectionToolStore();
    return(
        <>
            <BallotList elections={store.elections} onVote={onVote}/>
        </>
    )
};
