var mrMahmud = {
    name: 'Mahmud',
    age: 29,
    height: '5.6feet',
    eyeColor: 'black',
    weight: '181lbs'
}


console.log(mrMahmud); // output of whole object
console.log(Object.keys(mrMahmud)); // getting every keys name
console.log(Object.values(mrMahmud)); // getting the values

var keys = Object.keys(mrMahmud);
console.log(keys.length); // getting length of all keys

var values = Object.values(mrMahmud);
console.log(values.length); // getting length of all values



// setting property values by 3 rules
mrMahmud.weight = '87kg'; // by dot notation
mrMahmud['weight'] = '87kg'; // by target property name
var myOverWeight = mrMahmud['weight']; // by variable
mrMahmud[myOverWeight] = '87kg';



// getting property values by 3 rules
console.log(mrMahmud.weight); // by dot notation
console.log(mrMahmud['weight']); // by target property name
var myWeight = mrMahmud['weight']; // by variable
console.log(myWeight);