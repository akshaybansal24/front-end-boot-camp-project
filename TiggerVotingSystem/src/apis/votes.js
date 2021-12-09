export const allVotes = async() => {
    try{
        const res = await fetch('http://localhost:3060/votes')
        const votes = await res.json();
        return votes;
    }
    catch(error){
        console.log(error);
    }
};

export const appendVote = async(vote) => {
    const res = await fetch('http://localhost:3060/votes', {
          method: 'POST',
          headers: { 'Content-Type': 'Application/JSON'},
          body: JSON.stringify(vote),
        });
    
    const newVote = await res.json();
    return newVote;
    
};

export const oneVote = async(voteId) => {
    const res = await fetch(`http://localhost:3060/votes/${encodeURIComponent(voteId)}`);
    const vote = await res.json();
    return vote;
};

