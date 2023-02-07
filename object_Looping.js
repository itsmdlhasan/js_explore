var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 1
}

var keys = Object.keys(shoppingCart);
console.log(keys); // getting keys

var values = Object.values(shoppingCart);
console.log(values); // getting values

var entries = Object.entries(shoppingCart);
console.log(entries); // getting whole entries



// first system with for
for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}


// second system with for in
for (var propertyName in shoppingCart) {
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}