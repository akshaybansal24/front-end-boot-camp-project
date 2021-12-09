// export const all = () => {
//     return fetch('http://localhost:3060/colors')
//             .then(res => res.json());
// }

export const all = async() => {
    try{
        const res = await fetch('http://localhost:3060/cars')
        const cars = await res.json();
        return cars;
    }
    catch(error){
        console.log(error);
    }
};

export const append = async(car) => {
    const res = await fetch('http://localhost:3060/cars', {
          method: 'POST',
          headers: { 'Content-Type': 'Application/JSON'},
          body: JSON.stringify(car),
        });
    
    const newColor = await res.json();
    return newColor;
    
};

export const one = async(colorID) => {
    const res = await fetch(`http://localhost:3060/colors/${encodeURIComponent(colorID)}`);
    const color = await res.json();
    return color;
};

export const replace = async(car) => {
    return fetch(`http://localhost:3060/cars/${encodeURIComponent(car.id)}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'Application/JSON'},
          body: JSON.stringify(car),
        });
};

export const deleteCarInDB = async(carID) => {
    return fetch(`http://localhost:3060/cars/${encodeURIComponent(carID)}`, {
          method: 'DELETE',
        });
};