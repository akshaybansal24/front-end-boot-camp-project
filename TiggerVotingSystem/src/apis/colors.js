// export const all = () => {
//     return fetch('http://localhost:3060/colors')
//             .then(res => res.json());
// }

export const all = async() => {
    try{
        const res = await fetch('http://localhost:3060/colors')
        const colors = await res.json();
        return colors;
    }
    catch(error){
        console.log(error);
    }
};

export const append = async(color) => {
    const res = await fetch('http://localhost:3060/colors', {
          method: 'POST',
          headers: { 'Content-Type': 'Application/JSON'},
          body: JSON.stringify(color),
        });
    
    const newColor = await res.json();
    return newColor;
    
};

export const one = async(colorID) => {
    const res = await fetch(`http://localhost:3060/colors/${encodeURIComponent(colorID)}`);
    const color = await res.json();
    return color;
};

export const replace = async(color) => {
    return fetch(`http://localhost:3060/color/${encodeURIComponent(color.id)}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'Application/JSON'},
          body: JSON.stringify(color),
        });
};

export const deleteColour = async(colorID) => {
    return fetch(`http://localhost:3060/colors/${encodeURIComponent(colorID)}`, {
          method: 'DELETE',
        });
};