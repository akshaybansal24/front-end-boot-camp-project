export const allElections = async() => {
    try{
        const res = await fetch('http://localhost:3060/elections')
        const elections = await res.json();
        return elections;
    }
    catch(error){
        console.log(error);
    }
};

export const appendElection = async(election) => {
    const res = await fetch('http://localhost:3060/elections', {
          method: 'POST',
          headers: { 'Content-Type': 'Application/JSON'},
          body: JSON.stringify(election),
        });
    
    const newElection = await res.json();
    return newElection;
    
};

export const replaceElection = async(election) => {
    return fetch(`http://localhost:3060/elections/${encodeURIComponent(election.id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'Application/JSON'},
        body: JSON.stringify(election),
    });
};

export const oneElection = async(electionId) => {
    const res = await fetch(`http://localhost:3060/elections/${encodeURIComponent(electionId)}`);
    const election = await res.json();
    return election;
};

