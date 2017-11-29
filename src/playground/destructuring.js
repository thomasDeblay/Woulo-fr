// const person = {
//     name : 'Thomas',
//     age : 20,
//     location: {
//         city : 'Paris',
//         temp: 77
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);


// const {city, temp: temperature} = person.location;
// if(city && temperature)
// {
//     console.log(`it's ${temperature} in ${city}`);
//}


const adress = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];


const [street, city, state, zip] = adress;

console.log(`You are in ${street} ${city}`);