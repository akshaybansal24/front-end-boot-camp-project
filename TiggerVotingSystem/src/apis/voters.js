// export const all = () => {
//     return fetch('http://localhost:3060/colors')
//             .then(res => res.json());
// }

export const all = async() => {
    try{
        const res = await fetch('http://localhost:3060/voters')
        const voters = await res.json();
        return voters;
    }
    catch(error){
        console.log(error);
    }
};

export const getOneVoter = async(voterId) => {
    try{
        const res = await fetch(`http://localhost:3060/voters/${encodeURIComponent(voterId)}`)
        const voter = await res.json();
        return voter;
    }
    catch(error){
        console.log(error);
    }
};

export const append = async(voter) => {
    const res = await fetch('http://localhost:3060/voters', {
          method: 'POST',
          headers: { 'Content-Type': 'Application/JSON'},
          body: JSON.stringify(voter),
        });
    
    const newColor = await res.json();
    return newColor;
    
};

export const one = async(colorID) => {
    const res = await fetch(`http://localhost:3060/colors/${encodeURIComponent(colorID)}`);
    const color = await res.json();
    return color;
};

export const replace = async(voter) => {
    return fetch(`http://localhost:3060/voters/${encodeURIComponent(voter.id)}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'Application/JSON'},
          body: JSON.stringify(voter),
        });
};

export const deleteVoterInDB = async(voterID) => {
    return fetch(`http://localhost:3060/voters/${encodeURIComponent(voterID)}`, {
          method: 'DELETE',
        });
};

export const deleteMultipleVotersInDB = async(voterIDList) => {
    console.log("Inside the API");
    console.log(voterIDList);
    return await voterIDList.forEach(voterID => deleteVoterInDB(voterID));
};