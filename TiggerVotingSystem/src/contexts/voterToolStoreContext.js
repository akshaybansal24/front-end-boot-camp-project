import { createContext, useContext } from 'react';
import { useVoterToolStore } from '../hooks/useVoterToolStore';

const voterToolStoreContext = createContext();

export const VoterToolStoreProvider = ({ voters, children }) => {
    return <voterToolStoreContext.Provider
        value={useVoterToolStore([...voters])}>
        {children}
    </voterToolStoreContext.Provider>;
};

export const useVoterToolStoreContext = () => {
    return useContext(voterToolStoreContext);
};