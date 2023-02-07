/* function functionName(parameters1, parameters2, ...) {
    // function body
    // statements to perform some action
    return expression;
  }
// now call the function */











// no parameter, no return
function startFan() {
    console.log('Press the switch');
}
startFan();









// no parameter, has return
function dakAmay() {
    return 'Mahmud';
}
console.log(dakAmay());







// has parameter, no return
function shingaraNiyeAy(money) {
    console.log('250 takar shingara den');
}
shingaraNiyeAy(250); // here 250 will be set as a value of money parameter



function fanChar(shongkha) {
    console.log('fan er switch de', shongkha, 'ta');
    console.log('accha dicchi');
}
var shongkha = 1; // alada vabe parameter er man dewar jonno
fanChar(shongkha);


function sum(a, b, c, d, e) {
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}
sum(25, 56, 48, 35, 48);
sum(25, 56); // ekhane output NaN (not a number) hobe jehetu e er kono man dewa nai fole jog kora jacchena,, and ei jonno prothom console.log e last er man gulo undefined dekhabe







// has parameter, has return
function jogfol(num1, num2, num3) {
    console.log(num1, num2, num3);
    var sum = num1 + num2 + num3;
    return sum;
}
var result = jogfol(44, 56, 77); // ekhane jogfol function take result variable e rakha hoyeche
console.log(result);
jogfol(33, 67, 99);


function add(price1, price2) {
    const addition = price1 + price2;
    return addition;
}
console.log(add(44, 55));