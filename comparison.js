 var x = 5;
 var y = 7;

 console.log(x > 5); // false, because x is not greater than 5
 console.log(x < 5); // false, because x is not less than 5
 console.log(x >= 5); // true, because x is not greater than 5 but equal to 5
 console.log(x <= 5); // true, because x is not less than 5 but equal to 5
 console.log(x == 5); // true
 console.log(x == '5'); // true, because data type will not count there
 console.log(x === 5); // true
 console.log(x === '5'); // false, because data type will count there
 console.log(x != 5); // false
 console.log(x !== 6); // true
 console.log(x !== 5); // false
 console.log(x !== 6); // true, because value and data type both have to be equal
 console.log(x !== '5'); // true, because value and data type both are not equal 
 console.log(x < 5 && y == 7); // false, because both have to be true for AND sign
 console.log(x < 5 || y == 7); // true, because any one comparison have to be true for OR sign
 console.log(!(x == y)); // true, because comparison can't be true for Not sign 