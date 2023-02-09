function multiply(num1, num2) {
    return num1 * num2;
}

const result = multiply(24*3);
console.log(result); // NaN  দেখাবে কারন ২৪*৩ কে প্রথম প্যারামিটার এর মান ধরবে, এবং দ্বিতীয় প্যারামিটার কে undefined ধরবে। 


function addition(price1, price2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('put number here'); // এভাবে warning দেয়া যায় সঠিক data type বসানোর জন্য। 
    }
    return price1 + price2;
}

console.log(addition(34, 'khata'));



function jog(input1, input2) {
    return input1 + input2;
}
console.log(jog('adam' + 'eve')); // adameveundefined দেখাবে কারন console.log এর ভিতরে থাকা + অপারেটর টি অলরেডি jog ফাংশন দ্বারা যোগ হয়ে যাওয়া adameve এর সাথে undefined কে যুক্ত করবে। 
console.log(jog('adam', 'eve'));